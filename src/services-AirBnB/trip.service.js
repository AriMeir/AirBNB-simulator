
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
}
window.cs = tripService

_createTrips()

async function query(filterBy /* = { check_in:'', check_out: '', booked: 0, price:0} */) {

    let trips = await storageService.query(STORAGE_KEY);
    if (filterBy) {
        return storageService.get(STORAGE_KEY, filterBy)
    } else {
        return trips
    }
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
