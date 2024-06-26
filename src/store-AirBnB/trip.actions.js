import { tripService } from '../services/trip.service.local'
import { store } from '../store/store'
import { ADD_TRIP, REMOVE_TRIP, SET_TRIPS, SET_TRIP, UPDATE_TRIP, ADD_TRIP_MSG } from './trip.reducer'

export async function loadTrips() {
    try {
        const trips = await tripService.query()
        console.log('Trips from DB:', trips)
        store.dispatch(getCmdSetTrips(trips))
    } catch (err) {
        console.log('Cannot load trips', err)
        throw err
    }
}

export async function loadTrip(tripId) {
    try {
        const trip = await tripService.getById(tripId)
        console.log('Trip from DB:', trip)
        store.dispatch(getCmdSetTrip(trip))
    } catch (err) {
        console.log('Cannot load trip', err)
        throw err
    }
}

export async function removeTrip(tripId) {
    try {
        await tripService.remove(tripId)
        store.dispatch(getCmdRemoveTrip(tripId))
    } catch (err) {
        console.log('Cannot remove trip', err)
        throw err
    }
}

export async function addTrip(trip) {
    try {
        const savedTrip = await tripService.save(trip)
        console.log('Added Trip', savedTrip)
        store.dispatch(getCmdAddTrip(savedTrip))
        return savedTrip
    } catch (err) {
        console.log('Cannot add trip', err)
        throw err
    }
}

export async function updateTrip(trip) {
    try {
        const savedTrip = await tripService.save(trip)
        console.log('Updated Trip:', savedTrip)
        store.dispatch(getCmdUpdateTrip(savedTrip))
        return savedTrip
    } catch (err) {
        console.log('Cannot save trip', err)
        throw err
    }
}

export async function addTripMsg(tripId, txt) {
    try {
        const msg = await tripService.addTripMsg(tripId, txt)
        console.log('Added Trip message', msg)
        store.dispatch(getCmdAddTripMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add trip msg', err)
        throw err
    }
}


// Command Creators:
function getCmdSetTrips(trips) {
    return {
        type: SET_TRIPS,
        trips
    }
}
function getCmdSetTrip(trip) {
    return {
        type: SET_TRIP,
        trip
    }
}
function getCmdRemoveTrip(tripId) {
    return {
        type: REMOVE_TRIP,
        tripId
    }
}
function getCmdAddTrip(trip) {
    return {
        type: ADD_TRIP,
        trip
    }
}
function getCmdUpdateTrip(trip) {
    return {
        type: UPDATE_TRIP,
        trip
    }
}
function getCmdAddTripMsg(msg) {
    return {
        type: ADD_TRIP_MSG,
        msg
    }
}

// unitTestActions()
async function unitTestActions() {
    await loadTrips()
    await addTrip(tripService.getEmptyTrip())
    await updateTrip({
        _id: 'm1oC7',
        title: 'Trip-Good',
    })
    await removeTrip('m1oC7')
    // TODO unit test addTripMsg
}
