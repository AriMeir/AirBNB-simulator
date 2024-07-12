import { stay1,stay3, stay4, stay5, stay6, stay7, stay8, stay9,stay10 } from "../../Data/stays"
import { stay2 } from "../../Data/stays"

export const SET_STAYS = 'SET_STAYS'
export const SET_STAY = 'SET_STAY'
export const REMOVE_STAY = 'REMOVE_STAY'
export const ADD_STAY = 'ADD_STAY'
export const UPDATE_STAY = 'UPDATE_STAY'
export const ADD_STAY_MSG = 'ADD_STAY_MSG'
export const UPDATE_TASK = 'UPDATE_TASK'


const initialState = {
    stay: null,
    stays: [],
}

export function stayReducer(state = initialState, action) {
    var newState = state
    var stays
    switch (action.type) {
        case SET_STAYS:
            newState = { ...state, stays: action.stays }
            break
        case SET_STAY:
            newState = { ...state, stay: action.stay }
            break
        case REMOVE_STAY:
            stays = state.stays.filter(stay => stay._id !== action.stayId)
            newState = { ...state, stays}
            break
        case ADD_STAY:
            newState = { ...state, stays: [...state.stays, action.stay] }
            break
        case UPDATE_STAY:
            stays = state.stays.map(stay => (stay._id === action.stay._id) ? action.stay : stay)
            newState = { ...state, stays }
            break
/*         case ADD_STAY_MSG:
            newState = { ...state, stay: {...state.stay, msgs: [...state.stay.msgs || [], action.msg]} }
            break */
/*         case UPDATE_TASK:
            const stay = {...state.stay}
            stay.groups = state.stay.groups.map(g => {
                if (g.id !== action.groupId) return g
                const group = {...g}
                group.tasks = group.tasks.map(t => (t.id !== action.task.id)? t : action.task)
                return group
            })
            stay.activities = [...stay.activities, action.activity]
            newState = { ...state, stay }
            break */

        default:
    }
    return newState
}


// unitTestReducer()
export function unitTestReducer() {
    var state = initialState
    const stay_1 = stay1
    const stay_2 = stay2
    const stay_3 = stay3
    const stay_4 = stay4
    const stay_5 = stay5
    const stay_6 = stay6
    const stay_7 = stay7
    const stay_8 = stay8
    const stay_9 = stay9
    const stay_10 = stay10


    state = stayReducer(state, {type: SET_STAYS, stays: [stay_1,stay_2,stay_3,stay_4,stay_5,stay_6,stay_7,stay_8,stay_9,stay_10]})
    console.log('After SET_STAYS:', state)

    state = stayReducer(state, {type: REMOVE_STAY, stayId: stay_2._id})
    console.log('After REMOVE_STAY:', state)

    state = stayReducer(state, {type: ADD_STAY, stay: stay_2})
    console.log('After ADD_STAY:', state)

    state = stayReducer(state, {type: UPDATE_STAY, stay: {...stay_2, capacity: 2}})
    console.log('After UPDATE_STAY:', state)

    // const msg = {_id: 'm'+parseInt(Math.random()*100), txt: 'Some msg'}
    // state = stayReducer(state, {type: ADD_STAY_MSG, stayId: stay1._id, msg})
    // console.log('After ADD_STAY_MSG:', state)

    // state = stayReducer(state, {type: REMOVE_STAY, stayId: stay1._id})
    // console.log('After REMOVE_STAY:', state)
}
