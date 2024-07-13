import React, { useState } from 'react';

export function LocationFilter({ location, setLocation }) {
    return (
        <div className="search-category location flex column align-left just-cont-left">
            <div>Where</div>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search Destinations"
            />
        </div>
    );
}
