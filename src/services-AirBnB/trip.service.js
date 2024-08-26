
import { storageService } from './async-storage.service'
import { Children } from 'react'
import { httpService } from './http.service'
import { utilService } from './util.service'
import { orders1, orders2 } from '../Data/orders'


const STORAGE_KEY = 'trips'

export const tripService = {
    query,
    getById,
    save,
    remove,
    getEmptyTrip,
    cancelTrip
}
window.cs = tripService

_createTrips()

async function query(filterBy) {
    let trips = await storageService.query(STORAGE_KEY);

    if (filterBy) {
        console.log("I'm here, starting to filter");
        // Order
        if (filterBy.filterType === "order") {
            if (filterBy.by === "price") {
                if (filterBy.order === "up") {
                    trips.sort((a, b) => b.totalPrice - a.totalPrice);
                } else if (filterBy.order === "down") {
                    trips.sort((a, b) => a.totalPrice - b.totalPrice);
                }
            } else if (filterBy.by === "status") {
                const statusOrder = ["approved", "pending", "canceled", "rejected"];
                if (filterBy.order === "up") {
                    trips.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
                } else if (filterBy.order === "down") {
                    trips.sort((a, b) => statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status));
                }
            } else if (filterBy.by === "date") {
                if (filterBy.order === "up") {
                    trips.sort((a, b) => {
                        const dateA = new Date(a.startDate.split('/').reverse().join('-'));
                        const dateB = new Date(b.startDate.split('/').reverse().join('-'));
                        return dateA - dateB;
                    });
                } else if (filterBy.order === "down") {
                    trips.sort((a, b) => {
                        const dateA = new Date(a.endDate.split('/').reverse().join('-'));
                        const dateB = new Date(b.endDate.split('/').reverse().join('-'));
                        return dateB - dateA;
                    });
                }
            }
        }
    }

    return trips;
}

function getById(tripId) {
    return storageService.get(tripId)
}

async function remove(tripId) {
    return storageService.delete(tripId)
}
async function save(trip) {
    var savedTrip
    if (trip._id) {
        savedTrip = await storageService.put(STORAGE_KEY, trip)

    } else {
        savedTrip = await storageService.post(STORAGE_KEY, trip)
    }
    return savedTrip
}

/* async function addTripMsg(tripId, txt) {
    const savedMsg = await storageService.post(`trip/${tripId}/msg`, {txt})
    return savedMsg
} */
    async function cancelTrip(tripId) {
        return storageService.get(STORAGE_KEY,tripId).then(trip => {
            if (trip) {
                trip.status = 'canceled'
                return storageService.put(STORAGE_KEY,trip)
            } else {
                throw new Error('Trip not found')
            }
        })
    } 

function getEmptyTrip() {
    return {
        Place: 'LakeView-' + utilService.makeId(),
        price: utilService.getRandomIntInclusive(1000, 9000),
        reviews: []
    }
}

function _createTrips() {
    let trips = utilService.loadFromStorage(STORAGE_KEY);
    if (!trips || !trips.length) {
        trips = [orders1, orders2]

        utilService.saveToStorage(STORAGE_KEY, trips);
    }
}
