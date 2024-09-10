import express from 'express'
import { loggerService } from './services/logger.service.js'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import path from 'path'
import cookieParser from 'cookie-parser'


// mongodb info
const url = 'mongodb://localhost:27017'
const dbName = 'Airbnb'
// -- 

const app = express()

const corsOptions = {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173',
        'http://127.0.0.1:3030', 'http://localhost:3030'
    ],
    credentials: true
}





// App configuration
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())


// Routes
import { stayRoutes } from './api/stay/stay.routes.js'
import { tripRoutes } from './api/trip/trip.routes.js'
import { userRoutes } from './api/user/user.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'

app.use('/api/stay', stayRoutes)
app.use('/api/trip', tripRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)







// fallback route
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})



console.log('process.env.PORT: ', process.env.PORT)
const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    loggerService.info('Up and running on port ' + PORT)
})