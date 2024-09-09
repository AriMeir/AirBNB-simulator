import fs from 'fs'
import { dbService } from '../../services/db.service.js';
import { ObjectId } from 'mongodb';
import { loggerService } from '../../services/logger.service.js'
import { utilService } from '../../services/util.service.js';

export const stayService = {
    query,
    getById,
   /*  remove,
    save */
}

var stays = utilService.readJsonFile('./data/stay.json')
var amenities = utilService.readJsonFile('./data/amenities.json')


async function query(filterBy = {}) {
    try {
        const criteria = {};

        if (filterBy.location) {
            criteria['loc.region'] = filterBy.location;
        }

        if (filterBy.totalGuests) {
            criteria.capacity = { $gte: filterBy.totalGuests };
        }

        if (filterBy.category) {
            criteria.labels = { $in: [filterBy.category] };
        }

        const collection = await dbService.getCollection('stay');
        const staysToReturn = await collection.find(criteria).toArray();
        
        return staysToReturn;
    } catch (err) {
        loggerService.error(err);
        throw err;
    }
}

async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay');
        const stay = await collection.findOne({ _id: new ObjectId(stayId) });

        if (!stay) throw `Couldn't find stay with _id ${stayId}`;

        // Assuming reviews and amenities are stored separately and need to be fetched
        const reviewsCollection = await dbService.getCollection('reviews');
        const reviews = await reviewsCollection.find({}).toArray();

        stay.reviews = reviews;
        stay.amenities = amenities;
        return stay;
    } catch (err) {
        loggerService.error('stayService[getById] : ' + err);
        throw err;
    }
}

/* async function remove(stayId) {
    try {
        const idx = stays.findIndex(stay => stay._id === stayId)
        if (idx === -1) throw `Couldn't find stay with _id ${stayId}`

        stays.splice(idx, 1)
        await _savestaysToFile('./data/stay.json')
    } catch (err) {
        loggerService.error('stayService[remove] : ', err)
        throw err
    }
}

async function save(stayToSave, loggedinUser) {
    try {
        if (stayToSave._id) {
            if(!loggedinUser.isAdmin && stayToSave?.owner?._id !== loggedinUser._id) throw 'Cant update stay'

            const idx = stays.findIndex(stay => stay._id === stayToSave._id)
            if (idx === -1) throw `Couldn't find stay with _id ${stayId}`
            stays.splice(idx, 1, {...stays, ...stayToSave })
        } else {
            stayToSave._id = utilService.makeId()
            stayToSave.createdAt = Date.now()
            stayToSave.owner = loggedinUser
            stays.push(stayToSave)
        }
        await _savestaysToFile('./data/stay.json')
        return stayToSave
    } catch (err) {
        loggerService.error('stayService[save] : ' + err)
        throw err
    }
} */

/* function _savestaysToFile(path) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(stays, null, 2)
        fs.writeFile(path, data, (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
} */