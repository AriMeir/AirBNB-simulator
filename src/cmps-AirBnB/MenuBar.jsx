import React from 'react';
import { useNavigate } from 'react-router';
import { authService } from '../services-AirBnB/auth.service';

export function MenuBar() {
    const navigate = useNavigate();
    return (
        <div className="menu-bar">
            <div className="menu-item border-bottom" onClick={() => navigate('/login')}>Log in</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/stay')}>Home</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/trips')}>Trips</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/wish')}>Wishlist</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/host')}>host page</div>
            <div className="menu-item border-bottom" onClick={() => {authService.logout();
                                                                        navigate('/stay')}}>Log out</div>
        </div>
    );
}