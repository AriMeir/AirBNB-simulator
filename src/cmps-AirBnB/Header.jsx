import {Filter} from './Filter'
import {UserMenuDropDown} from './UserMenuDropDown'
export function Header() {
    return (
        <section className='header flex-row-center space-between padding'>
            <h1>logo</h1>
            <Filter/>
            <div className='flex-row-center space-between'>
            <h1> become host</h1>
            <UserMenuDropDown/>
            </div>
            
        </section >
    )
}

