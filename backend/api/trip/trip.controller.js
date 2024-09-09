// Car CRUDL API
import { tripService } from './trip.service.js';

// List
export async function getTrips(req, res) {
    
    try {
        const filterBy = {
            filterType: req.query.filterType || '',
            by: req.query.by || "",
            order: req.query.order || ""
        }
        console.log(filterBy)
        const trips = await tripService.query(filterBy)
        res.send(trips)
    } catch (err) {
        res.status(400).send(`Couldn't get trips`)
    }
}

// Get
export async function getTrip(req, res) {
    const { tripId } = req.params
    try {
        const stay = await tripService.getById(tripId)  
        res.send(stay)
    } catch (err) {
        res.status(400).send(`Couldn't get trip`)
    }
}

// // Save
export async function addTrip(req, res) {

    const {
        host,
        buyer,
        totalPrice,
        startDate,
        endDate,
        guests,
        stay,
        loc,
        msgs,
        status
    } = req.body

    const tripToSave = {
        host: {
            hostId: host.hostId,
            hostName: host.hostName,
            imgUrl: host.imgUrl
        },
        buyer: {
            _id: buyer._id,
            fullname: buyer.fullname,
            imgUrl: buyer.imgUrl
        },
        totalPrice,
        startDate,
        endDate,
        guests: {
            adults: guests.adults,
            kids: guests.kids
        },
        stay: {
            id: stay.id,
            name: stay.name,
            price: stay.price,
            imgUrl: stay.imgUrl
        },
        loc: {
            country: loc.country,
            city: loc.city
        },
        msgs: msgs || [], 
        status
    };

    try {
        const savedTrip = await tripService.save(tripToSave)
        res.send(savedTrip)
    } catch (err) {
        res.status(400).send(`Couldn't save trip`)
    }
}

export async function updateTrip(req, res) {

    const {
        _id, 
        status
    } = req.body

    const statusToSave = {
        _id,
        status
    }
    console.log(statusToSave)

    try {
        const savedTrip = await tripService.updateStatus(statusToSave)
        res.send(savedTrip)
    } catch (err) {
        res.status(400).send(`Couldn't save trip`)
    }
}