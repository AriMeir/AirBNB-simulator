import React from 'react';
import { useNavigate } from 'react-router';
import { logout } from '../store-AirBnB/actions/user.actions';

export function MenuBar({onClose, user}) {
    const navigate = useNavigate();

    function onLogout(){
        onClose()
        logout()
    }

    return (
        <div className="menu-bar">
            {!user && <div className="menu-item light-bold" onClick={() => navigate('/login')}>Log in</div>}
            {user && <><div className="menu-item light-bold" onClick={() => navigate('/stay')}>Home</div>
            <div className="menu-item light-bold" onClick={() => navigate('/trips')}>Trips</div>
            <div className="menu-item light-bold border-bottom" onClick={() => navigate('/wish')}>Wishlist</div></>}
            {user?.type === 'host' && <div className="menu-item border-bottom" onClick={() => navigate('/host')}>Host page</div>}
            {user && <div className="menu-item" onClick={onLogout}>Log out</div>}
        </div>
    );
}
