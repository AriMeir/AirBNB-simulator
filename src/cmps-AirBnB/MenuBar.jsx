import React from 'react';
import { useNavigate } from 'react-router';
import { authService } from '../services-AirBnB/auth.service';
import { logout } from '../store-AirBnB/actions/user.actions';

export function MenuBar() {
    const navigate = useNavigate();
    return (
        <div className="menu-bar">
            <div className="menu-item bold" onClick={() => navigate('/login')}>Log in</div>
            <div className="menu-item bold" onClick={() => navigate('/stay')}>Home</div>
            <div className="menu-item bold" onClick={() => navigate('/trips')}>Trips</div>
            <div className="menu-item bold border-bottom" onClick={() => navigate('/wish')}>Wishlist</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/host')}>host page</div>
            <div className="menu-item" onClick={logout}>Log out</div>
        </div>
    );
}
