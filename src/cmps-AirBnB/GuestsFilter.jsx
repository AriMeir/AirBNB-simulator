import React, { useState } from 'react';

export function GuestsFilter({ guests, setGuests }) {
    return (
        <div className="search-category guests flex column align-left just-cont-left">
            <div>Guests</div>
            <input
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Add guests"
            />
        </div>
    );
}
