
import { storageService } from './async-storage.service'
import { Children } from 'react'
import { httpService } from './http.service'
import { utilService } from './util.service'


const STORAGE_KEY = 'trip'

export const tripService = {
    query,
    getById,
    save,
    remove,
    getEmptyTrip,
    addTripMsg
}
window.cs = tripService


async function query(filterBy = { location:'', dates: '', Adults: 0, Children:0, Infants:0, Pets: 0 }) {
    return storageService.get(STORAGE_KEY, filterBy)
}

function getById(tripId) {
    return storageService.get(`trip/${tripId}`)
}

async function remove(tripId) {
    return storageService.delete(`trip/${tripId}`)
}
async function save(trip) {
    var savedTrip
    if (trip._id) {
        savedTrip = await storageService.put(`trip/${trip._id}`, trip)

    } else {
        savedTrip = await storageService.post('trip', trip)
    }
    return savedTrip
}

async function addTripMsg(tripId, txt) {
    const savedMsg = await storageService.post(`trip/${tripId}/msg`, {txt})
    return savedMsg
}


function getEmptyTrip() {
    return {
        Place: 'LakeView-' + utilService.makeId(),
        price: utilService.getRandomIntInclusive(1000, 9000),
        reviews: []
    }
}
