import { svgIcons } from './Svgs'

export function UserMenuDropDown() {
    return (
        <section className="user-menu flex">
            <div className='user-dropdown'>{svgIcons.UserMenuDropDown}</div>
            <div className='user-profile-pic'>{svgIcons.UserPofilePic}</div>
        </section >
    )
}
