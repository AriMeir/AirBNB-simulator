import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { DynamicFilterComponent } from './DynamicFilterComponent';
import { Popover } from 'antd';

export function BigFilter() {
    const [location, setLocation] = useState('');
    const [showLocationFilter, setShowLocationFilter] = useState(false);
    const [showCheckInFilter, setShowCheckInFilter] = useState(false);
    const [showGuestsFilter, setShowGuestsFilter] = useState(false);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const onSearchLocationClick = (visible) => {
        setShowLocationFilter(visible);
        if (visible) {
            setShowCheckInFilter(false);
            setShowGuestsFilter(false);
        }
    };

    const onCheckInClick = (visible) => {
        setShowCheckInFilter(visible);
        if (visible) {
            setShowLocationFilter(false);
            setShowGuestsFilter(false);
        }
    };

    const onGuestsClick = (visible) => {
        setShowGuestsFilter(visible);
        if (visible) {
            setShowLocationFilter(false);
            setShowCheckInFilter(false);
        }
    };

    return (
        <div className='filter-container-big flex align-center relative'>
            <Popover
                placement='bottomLeft'
                content={<DynamicFilterComponent type="location" />}
                open={showLocationFilter}
                trigger="click"
                arrow={false}
                onOpenChange={onSearchLocationClick}
            >
                <div className="search-category location flex column align-left just-cont-left">
                    <div>Where</div>
                    <input 
                        type="text"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="Search Destinations"
                    />      
                </div>
            </Popover>

            <span className="filter-splitter"></span>

            <Popover
                placement='bottom'
                content={<DynamicFilterComponent type="date" />}
                open={showCheckInFilter}
                trigger="click"
                arrow={false}
                onOpenChange={onCheckInClick}
            >
                <div className='check-in-out flex row center center align-center'>
                    <div className="search-category check-in flex column align-left just-cont-left">
                        <div>Check in</div>
                        <div>Add dates</div>
                    </div>
                    <span className="filter-splitter"></span>
                    <div className="search-category check-out flex column align-left just-cont-left">
                        <div>Check out</div>
                        <div>Add dates</div>
                    </div>
                </div>
            </Popover>

            <span className="filter-splitter"></span>

            <Popover
                placement='bottomRight'
                content={<DynamicFilterComponent type="guests" />}
                open={showGuestsFilter}
                trigger="click"
                arrow={false}
                onOpenChange={onGuestsClick}
            >
                <div className="search-category guests-button flex row align-center space-between">
                    <div className='guests-text flex column align-left just-cont-left'>
                        <div>Guests</div>
                        <div>Add guests</div>
                    </div>
                    <button className="mini-search-button big-search-button"><IoSearch /></button>
                </div>
            </Popover>
        </div>
    );
}
