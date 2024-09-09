// Car CRUDL API
import { stayService } from './stay.service.js';

// List
export async function getStays(req, res) {
    try {
        const filterBy = {
            location: req.query.location || '',
            checkIn: req.query.checkIn || '',
            checkOut: req.query.checkOut || '',
            totalGuests: +req.query.totalGuests || 0,
            category: req.query.category || '',
        }
        console.log()
        const stays = await stayService.query(filterBy)
        res.send(stays)
    } catch (err) {
        res.status(400).send(`Couldn't get stays`)
    }
}

// Get
export async function getStay(req, res) {
    const { stayId } = req.params
    try {
        const stay = await stayService.getById(stayId)  
        res.send(stay)
    } catch (err) {
        res.status(400).send(`Couldn't get stay`)
    }
}


/* // // Delete
export async function removeCar(req, res) {
    const { carId } = req.params
    try {
        await carService.remove(carId)
        res.send('Deleted OK')
    } catch (err) {
        res.status(400).send(`Couldn't remove car : ${err}`)
    }
}


// // Save
export async function addCar(req, res) {
    const { loggedinUser } = req
    const { vendor, speed } = req.body
        // Better use createCar()

    const carToSave = { vendor, speed: +speed }

    try {
        const savedCar = await carService.save(carToSave, loggedinUser)
        res.send(savedCar)
    } catch (err) {
        res.status(400).send(`Couldn't save car`)
    }
}

export async function updateCar(req, res) {
    const { loggedinUser } = req

    const { _id, vendor, speed, owner } = req.body
    const carToSave = { _id, vendor, speed: +speed, owner }

    try {
        const savedCar = await carService.save(carToSave, loggedinUser)
        res.send(savedCar)
    } catch (err) {
        res.status(400).send(`Couldn't save car`)
    }
} */