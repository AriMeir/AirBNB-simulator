import fs from 'fs'
import { dbService } from '../../services/db.service.js';
import { ObjectId } from 'mongodb';
import { loggerService } from '../../services/logger.service.js'
import { utilService } from '../../services/util.service.js';

export const tripService = {
    query,
    getById,
    save,
    updateStatus
}

var trips = utilService.readJsonFile('./data/trip.json')



async function query(filterBy = {}) {
    try {
        const criteria = {};
        let sortCriteria = {};

        if (filterBy.filterType === "order") {
            if (filterBy.by === "price") {
                sortCriteria = { totalPrice: filterBy.order === "up" ? 1 : -1 };
            } else if (filterBy.by === "date") {
                sortCriteria = filterBy.order === "up" ? { startDate: 1 } : { endDate: -1 };
            }
        }

        const collection = await dbService.getCollection('trip');
        const trips = await collection.find(criteria).toArray();

        // Custom sorting for status
        if (filterBy.by === "status") {
            const statusOrder = ["approved", "pending", "canceled", "rejected"];
            trips.sort((a, b) => {
                const indexA = statusOrder.indexOf(a.status);
                const indexB = statusOrder.indexOf(b.status);
                return filterBy.order === "up" ? indexA - indexB : indexB - indexA;
            });
        } else if (Object.keys(sortCriteria).length > 0) {
            // Apply MongoDB native sorting
            trips.sort((a, b) => {
                for (const key in sortCriteria) {
                    const direction = sortCriteria[key];
                    if (a[key] < b[key]) return -direction;
                    if (a[key] > b[key]) return direction;
                }
                return 0;
            });
        }

        return trips;
    } catch (err) {
        loggerService.error(err);
        throw err;
    }
}

async function getById(tripId) {
    try {
        const collection = await dbService.getCollection('trip');
        const trip = await collection.findOne({_id: new ObjectId(tripId) });

        if (!trip) throw `Couldn't find trip with _id ${tripId}`;
        
        return trip;
    } catch (err) {
        loggerService.error('tripService[getById] : ' + err);
        throw err;
    }
}

/* async function remove(tripId) {
    try {
        const idx = trips.findIndex(trip => trip._id === tripId)
        if (idx === -1) throw `Couldn't find trip with _id ${tripId}`

        trips.splice(idx, 1)
        await _savetripsToFile('./data/trip.json')
    } catch (err) {
        loggerService.error('tripService[remove] : ', err)
        throw err
    }
} */

    async function save(tripToSave) {
        try {
            const collection = await dbService.getCollection('trip');
            
            // Generate a new ObjectId for the new trip
            tripToSave._id = new ObjectId();
            
            // Insert the new trip into the collection
            await collection.insertOne(tripToSave);
            
            return tripToSave;
        } catch (err) {
            loggerService.error('tripService[save] : ' + err);
            throw err;
        }
    }
    async function updateStatus(statusToSave) {
        try {
            const collection = await dbService.getCollection('trip');
            
            // Validate _id format
            if (!ObjectId.isValid(statusToSave._id)) {
                throw `Invalid tripId format: ${statusToSave._id}`;
            }
    
            // Fetch the existing trip
            const existingTrip = await collection.findOne({ _id: new ObjectId(statusToSave._id) });
            if (!existingTrip) {
                throw `Couldn't find trip with _id ${statusToSave._id}`;
            }
    
            // Check the status conditions
            if (existingTrip.status === 'canceled' && (statusToSave.status === 'approved' || statusToSave.status === 'rejected')) {
                throw new Error("Can't approve or reject a canceled trip");
            }
            if (existingTrip.status === 'rejected' && statusToSave.status === 'canceled') {
                throw new Error("Can't cancel a rejected trip");
            }
            if (existingTrip.status === statusToSave.status) {
                throw new Error("You can't do that again");
            }
    
            // Update the trip status
            await collection.updateOne(
                { _id: new ObjectId(statusToSave._id) },
                { $set: { status: statusToSave.status } }
            );
            
            // Fetch the updated trip to return
            const updatedTrip = await collection.findOne({ _id: new ObjectId(statusToSave._id) });
            
            return updatedTrip;
        } catch (err) {
            loggerService.error('tripService[updateStatus] : ' + err);
            throw err;
        }
    }
    


function _savetripsToFile(path) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(trips, null, 2)
        fs.writeFile(path, data, (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
}