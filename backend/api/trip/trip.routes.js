import express from 'express'
import { getTrip,getTrips, addTrip, updateTrip } from './trip.controller.js'
import { log } from '../../middlewares/log.middleware.js'


const router = express.Router()


router.get('/',log, getTrips)
router.get('/:tripId', log, getTrip)
/* router.delete('/:carId',log, requireAuth, removeCar) */
router.post('/', addTrip)
router.put('/', updateTrip)


export const tripRoutes = router