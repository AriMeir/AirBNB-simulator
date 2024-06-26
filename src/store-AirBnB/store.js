import { createStore, combineReducers } from 'redux'

import { stayReducer } from './stay.reducer'
import { userReducer } from './user.reducer'
import { tripReducer } from './trip.reducer'


const rootReducer = combineReducers({
    stayModule: stayReducer,
    tripModule: tripReducer,
    userModule: userReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
