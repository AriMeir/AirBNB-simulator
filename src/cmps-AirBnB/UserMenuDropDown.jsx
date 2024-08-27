
import { useSelector } from 'react-redux';
import { svgIcons } from './Svgs';



export function UserMenuDropDown() {
    const user = useSelector(storeState => storeState.userModule.user)
    console.log("We are here", user)
    

  
  
  return (
    <section className="user-menu flex">
      <div className='user-dropdown'>{svgIcons.UserMenuDropDown}</div>
      {!user && <div className='user-profile-pic'>{svgIcons.UserPofilePic}</div>}
      {user && <div className='user-profile-pic '><img className='circle' src={user.imgUrl}></img></div>}
    </section>
  );
}
