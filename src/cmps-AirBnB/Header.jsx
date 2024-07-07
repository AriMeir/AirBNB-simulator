import {Filter} from './Filter'
import {UserMenuDropDown} from './UserMenuDropDown'
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { svgIcons } from './Svgs'

export function Header() {
    return (
        <section className='header-container full main-content'>
            <div className='header main-content'>
                <div className='header-logo flex'>
                    <div className='airbnb-icon'>{svgIcons.AirBnB}</div>
                    <h1 className='airbnb-header'>airbnb</h1>
                </div>
                <div className='header-filter'>
                    <Filter/>
                </div>
                <div className='header-user flex-row-center space-between'>
                    <h1 className='switch-to-host'> Switch to hosting</h1>
                    {svgIcons.languageSwitch}
                    <UserMenuDropDown/>
                </div>
            </div>
        </section >
    )
}

// flex-row-center space-between padding
