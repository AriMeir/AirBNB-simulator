import React from 'react';
import { useNavigate } from 'react-router';

export function MenuBar() {
    const navigate = useNavigate();
    return (
        <div className="menu-bar">
            <div className="menu-item border-bottom" onClick={() => navigate('/login')}>Log in</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/stay')}>Home</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/trips')}>Trips</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/wish')}>Wishlist</div>
            <div className="menu-item border-bottom" onClick={() => navigate('/host')}>host page</div>
        </div>
    );
}