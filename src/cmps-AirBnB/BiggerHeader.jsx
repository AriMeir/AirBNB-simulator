import {Filter} from './Filter'
import {UserMenuDropDown} from './UserMenuDropDown'
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { svgIcons } from './Svgs'
import { BigFilter } from './BigFilter'

export function BiggerHeader() {
    return (
        <>
        <div className='screen-blur'></div>
        <section className='header-container full main-content'>
            
            <div className='header main-content'>
                <div className='header-logo flex'>
                    <div className='airbnb-icon'>{svgIcons.AirBnB}</div>
                    <h1 className='airbnb-header'>airbnb</h1>
                </div>
                <div className='filter-nav-container flex column center align-center'>
                    <div className='nav-bar flex row space-between'>
                        <button className='nav-button'><span>Stays</span></button>
                        <button className='nav-button'><span>Experiences</span></button>
                        <button className='nav-button'><span>Online Experiences</span></button>
                    </div>
                <div className='header-filter'>
                    <BigFilter/>
                    </div>
                </div>
                <div className='header-user flex-row-center'>
                    <h1 className='switch-to-host'> Switch to hosting</h1><p className='small-margin-right'></p>
                    {svgIcons.languageSwitch}<p className='small-margin-right'></p>
                    <UserMenuDropDown/>
                </div>
            </div>
        </section >
        </>
    )
}
