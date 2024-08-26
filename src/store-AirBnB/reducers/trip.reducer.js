export const SET_TRIPS = 'SET_TRIPS'
export const SET_TRIP = 'SET_TRIP'
export const REMOVE_TRIP = 'REMOVE_TRIP'
export const ADD_TRIP = 'ADD_TRIP'
export const UPDATE_TRIP = 'UPDATE_TRIP'
export const ADD_TRIP_MSG = 'ADD_TRIP_MSG'
export const UPDATE_TASK = 'UPDATE_TASK'
export const CANCEL_TRIP = 'CANCEL_TRIP'

const initialState = {
    trip: null,
    trips: [],
}

export function tripReducer(state = initialState, action) {
    var newState = state
    var trips
    switch (action.type) {
        case SET_TRIPS:
            newState = { ...state, trips: action.trips }
            break
        case SET_TRIP:
            newState = { ...state, trip: action.trip }
            break
        case REMOVE_TRIP:
            trips = state.trips.filter(trip => trip._id !== action.tripId)
            newState = { ...state, trips}
            break
        case ADD_TRIP:
            newState = { ...state, trips: [...state.trips, action.trip] }
            break
        case CANCEL_TRIP:
            trips = state.trips.map(trip => 
                trip._id === action.tripId ? { ...trip, status: 'canceled' } : trip
            );
            newState = { ...state, trips };
            break;      
        case UPDATE_TRIP:
            trips = state.trips.map(trip => (trip._id === action.trip._id) ? action.trip : trip)
            newState = { ...state, trips }
            break
        case ADD_TRIP_MSG:
            newState = { ...state, trip: {...state.trip, msgs: [...state.trip.msgs || [], action.msg]} }
            break
        case UPDATE_TASK:
            const trip = {...state.trip}
            trip.groups = state.trip.groups.map(g => {
                if (g.id !== action.groupId) return g
                const group = {...g}
                group.tasks = group.tasks.map(t => (t.id !== action.task.id)? t : action.task)
                return group
            })
            trip.activities = [...trip.activities, action.activity]
            newState = { ...state, trip }
            break

        default:
    }
    return newState
}


// unitTestReducer()
function unitTestReducer() {
    var state = initialState
    const trip1 = {_id: 'b101', title: 'Trip ' + parseInt(Math.random()*10)}
    const trip2 = {_id: 'b102', title: 'Trip ' + parseInt(Math.random()*10)}

    state = tripReducer(state, {type: SET_TRIPS, trips: [trip1]})
    console.log('After SET_TRIPS:', state)

    state = tripReducer(state, {type: ADD_TRIP, trip: trip2})
    console.log('After ADD_TRIP:', state)

    state = tripReducer(state, {type: UPDATE_TRIP, trip: {...trip2, title: 'Good'}})
    console.log('After UPDATE_TRIP:', state)

    state = tripReducer(state, {type: REMOVE_TRIP, tripId: trip2._id})
    console.log('After REMOVE_TRIP:', state)

    const msg = {_id: 'm'+parseInt(Math.random()*100), txt: 'Some msg'}
    state = tripReducer(state, {type: ADD_TRIP_MSG, tripId: trip1._id, msg})
    console.log('After ADD_TRIP_MSG:', state)



    // state = tripReducer(state, {type: REMOVE_TRIP, tripId: trip1._id})
    // console.log('After REMOVE_TRIP:', state)
}
