
import { storageService } from './async-storage.service'
import { Children } from 'react'
import axios from 'axios';
import { httpService } from './http.service'
import { utilService } from './util.service'
import { orders1, orders2, orders3, orders4 } from '../Data/orders'


const STORAGE_KEY = 'trips'
const URL = process.env.NODE_ENV === "production" ? 'api/trip' : 'http://localhost:3030/api/trip'

export const tripService = {
    query,
    getById,
    save,
    remove,
    getEmptyTrip,
    cancelTrip,
    approveTrip,
    rejectTrip,
    updateTrip
}
window.cs = tripService



async function query(filterBy) {
    /* let trips = await storageService.query(STORAGE_KEY); */
    let url;
    if(filterBy) {
        const { filterType, order, by} = filterBy;
        url = `${URL}?filterType=${filterType}&order=${order}&by=${by}`;
    } else {
        url = `${URL}`
    }
    
    const response = await axios.get(url);
    return response.data

   /*  if (filterBy) {
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
                const statusOrder = ["Approved", "Pending", "Canceled", "Rejected"];
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

    return trips; */
}

async function getById(tripId) {
    const response = await axios.get(`${URL}/${tripId}`)
    return response.data
}

async function remove(tripId) {
    return storageService.delete(tripId)
}
async function save(trip) {
    
    /* savedTrip = await storageService.post(STORAGE_KEY, trip) */
    const response = await axios.post(`${URL}`,trip)
    return response.data
}

/* async function addTripMsg(tripId, txt) {
    const savedMsg = await storageService.post(`trip/${tripId}/msg`, {txt})
    return savedMsg
} */
    async function updateTrip(statusToSave){
        const response = await axios.put(`${URL}`, statusToSave)
        return response.data
    }
    async function cancelTrip(tripId) {
        return storageService.get(STORAGE_KEY,tripId).then(trip => {
            if (trip) {
                trip.status = 'Canceled'
                return storageService.put(STORAGE_KEY,trip)
            } else {
                throw new Error('Trip not found')
            }
        })
    }
    async function approveTrip(tripId) {
        return storageService.get(STORAGE_KEY,tripId).then(trip => {
            if (trip) {
                if (trip.status === 'Canceled') {
                    throw new Error('Trip is already Canceled')
                }
                trip.status = 'Approved'
                return storageService.put(STORAGE_KEY,trip)
            } else {
                throw new Error('Trip not found')
            }
        })
    }
    async function rejectTrip(tripId) {
        return storageService.get(STORAGE_KEY,tripId).then(trip => {
            if (trip) {
                if (trip.status === 'Canceled') {
                    throw new Error('Trip is already Canceled')
                }
                trip.status = 'Rejected'
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
        trips = [orders1, orders2, orders3, orders4]

        utilService.saveToStorage(STORAGE_KEY, trips);
    }
}
