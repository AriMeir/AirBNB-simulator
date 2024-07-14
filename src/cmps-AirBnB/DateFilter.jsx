import React, { useState } from 'react';

export function DateFilter({ checkIn, setCheckIn, checkOut, setCheckOut }) {
    return (
        <div className="search-category date flex column align-left just-cont-left">
            <div>Check in</div>
            <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="Add dates"
            />
            <div>Check out</div>
            <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="Add dates"
            />
        </div>
    );
}
