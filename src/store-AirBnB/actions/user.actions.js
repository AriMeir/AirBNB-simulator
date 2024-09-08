
import { SET_USER} from '../reducers/user.reducer'
import { authService } from '../../services/auth.service'
import { store } from '../../store-AirBnB/store'

export async function login(credentials) {
    try {
        const user = await authService.login(credentials)
        console.log(user)
        store.dispatch(getCmdSetUser(user))
    } catch (err) {
        console.log('Cannot login', err)
        throw err
    }
}

export async function logout() {
    try {
        await authService.logout()
        store.dispatch(getCmdSetUser(null))
    } catch (err) {
        console.log('Cannot logout', err)
        throw err
    }
}

function getCmdSetUser(user) {
    return {
        type: SET_USER,
        user
    }
}
