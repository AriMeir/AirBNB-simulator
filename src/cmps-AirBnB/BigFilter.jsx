import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { DynamicFilterComponent } from './DynamicFilterComponent';


export function BigFilter() {
    const [location, setLocation] = useState('');
    const [showLocationFilter, setShowLocationFilter] = useState(false);
    const [showCheckInFilter, setShowCheckInFilter] = useState(false);
    const [showGuestsFilter, setShowGuestsFilter] = useState(false);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const onSearchLocationClick = () => {
        setShowLocationFilter(true);
        setShowCheckInFilter(false);
        setShowGuestsFilter(false);
    };

    const onCheckInClick = () => {
        setShowCheckInFilter(true);
        setShowLocationFilter(false);
        setShowGuestsFilter(false);
    };

    const onGuestsClick = () => {
        setShowGuestsFilter(true);
        setShowLocationFilter(false);
        setShowCheckInFilter(false);
    };

    return (
        <div className='filter-container-big flex align-center relative'>
            <div className="search-category location flex column align-left just-cont-left" onClick={onSearchLocationClick}>
                <div>Where</div>
                <input 
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Search Destinations"
                />
                {showLocationFilter && <DynamicFilterComponent title="Location Filter" />}
            </div>
            <span className="filter-splitter"></span>
            <div className="search-category check-in flex column align-left just-cont-left" onClick={onCheckInClick}>
                <div>Check in</div>
                <div>Add dates</div>
                {showCheckInFilter && <DynamicFilterComponent title="Check-in/Check-out Filter" />}
            </div>
            <span className="filter-splitter"></span>
            <div className="search-category check-out flex column align-left just-cont-left" onClick={onCheckInClick}>
                <div>Check out</div>
                <div>Add dates</div>
                
            </div>
            <span className="filter-splitter"></span>
            <div className="search-category guests-button flex row align-center space-between" onClick={onGuestsClick}>
                <div className='guests-text flex column align-left just-cont-left'>
                    <div>Guests</div>
                    <div>Add guests</div>
                </div>
                <button className="mini-search-button big-search-button"><IoSearch /></button>
                {showGuestsFilter && <DynamicFilterComponent title="Guests Filter" />}
            </div>
        </div>
    );
}


