import {Filter} from './Filter'
import {UserMenuDropDown} from './UserMenuDropDown'
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'

export function Header() {
    return (
        <section className='header flex-row-center space-between padding'>
            <h1 onClick={unitTestReducer}>logo</h1>
            <Filter/>
            <div className='flex-row-center space-between'>
            <h1> become host</h1>
            <UserMenuDropDown/>
            </div>

        </section >
    )
}
