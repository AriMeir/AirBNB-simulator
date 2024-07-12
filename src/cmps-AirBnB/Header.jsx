import {Filter} from './Filter'
import {UserMenuDropDown} from './UserMenuDropDown'
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { svgIcons } from './Svgs'
// import SvgIcon from './SvgIcon';

export function Header() {
    return (
        <section className='header-container full main-content'>
            <div className='header main-content'>
                <div className='header-logo flex'>
                    {/* <SvgIcon iconName={'AirBnB'} className='airbnb-icon'/> */}
                    <div className='airbnb-icon'>{svgIcons.AirBnB}</div>
                    <h1 className='airbnb-header'>airbnb</h1>
                </div>
                <div className='header-filter'>
                    <Filter/>
                </div>
                <div className='header-user flex-row-center'>
                    <h1 className='switch-to-host'> Switch to hosting</h1><p className='small-margin-right'></p>
                    {/* <SvgIcon iconName={'languageSwitch'} className='small-margin-right'/> */}
                    {svgIcons.languageSwitch}<p className='small-margin-right'></p>
                    <UserMenuDropDown/>
                </div>
            </div>
        </section >
    )
}
