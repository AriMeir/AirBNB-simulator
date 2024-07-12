// import { svgIcons } from './Svgs'
import { svgIcons } from './Svgs';

export function UserMenuDropDown() {
    return (
        <section className="user-menu flex">
            {/* <SvgIcon iconName={'UserMenuDropDown'} className='user-dropdown'/>
            <SvgIcon iconName={'UserPofilePic'} className='user-profile-pic'/> */}
            <div className='user-dropdown'>{svgIcons.UserMenuDropDown}</div>
            <div className='user-profile-pic'>{svgIcons.UserPofilePic}</div>
        </section >
    )
}
