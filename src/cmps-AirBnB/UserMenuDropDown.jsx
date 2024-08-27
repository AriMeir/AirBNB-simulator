import { svgIcons } from './Svgs';
import { authService } from '../services-AirBnB/auth.service';
import { useState, useEffect } from 'react';

export function UserMenuDropDown() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };
    updateUser();
    const handleStorageChange = (event) => {
      if (event.key === 'user') {
        updateUser();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  return (
    <section className="user-menu flex">
      <div className='user-dropdown'>{svgIcons.UserMenuDropDown}</div>
      {!user && <div className='user-profile-pic'>{svgIcons.UserPofilePic}</div>}
      {user && <div className='user-profile-pic '><img className='circle' src={user.imgUrl}></img></div>}
    </section>
  );
}
