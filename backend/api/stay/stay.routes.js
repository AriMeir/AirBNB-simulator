import express from 'express'
import { getStay , getStays} from './stay.controller.js'
import { log } from '../../middlewares/log.middleware.js'


const router = express.Router()


router.get('/',log, getStays)
router.get('/:stayId', log, getStay)
/* router.delete('/:carId',log, requireAuth, removeCar)
router.post('/', requireAuth, addCar)
router.put('/', requireAuth, updateCar)
 */

export const stayRoutes = router