import { createStore, combineReducers } from 'redux'

import { stayReducer } from './reducers/stay.reducer'
import { userReducer } from './reducers/user.reducer'
import { tripReducer } from './reducers/trip.reducer'


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
