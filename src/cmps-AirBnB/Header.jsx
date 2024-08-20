import {Filter} from './Filter'
import {UserMenuDropDown} from './UserMenuDropDown'
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { svgIcons } from './Svgs'
import { SmallFilter } from './SmallFilter'

// import SvgIcon from './SvgIcon';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

export function Header({onLittleFilterClick,stayId}) {
    const fixed = stayId? '': 'fixed'
    const navigate = useNavigate()
    useEffect(() => {
        console.log(stayId)
    })
  
    return (
        <section className={`header-container ${fixed} full main-content`}>
            <div className='header main-content'>
                <div className='header-logo flex' onClick={() => navigate(`/stay`)}>
                    <div className='airbnb-icon'>{svgIcons.AirBnB}</div>
                    <h1 className='airbnb-header'>airbnb</h1>
                </div>
                <div className='header-filter'>
                    <SmallFilter onLittleFilterClick={onLittleFilterClick}/> 
                </div>
                <div className='header-user flex-row-center'>
                    <h1 className='switch-to-host'> Switch to hosting</h1><p className='small-margin-right'></p>
                    {svgIcons.languageSwitch}<p className='small-margin-right'></p>
                    <UserMenuDropDown/>
                </div>
            </div>
        </section >
    )
}
