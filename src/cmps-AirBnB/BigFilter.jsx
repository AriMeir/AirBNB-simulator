import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { DynamicFilterComponent } from './DynamicFilterComponent';
import { Popover } from 'antd';
import { useSearchParams } from 'react-router-dom';

export function BigFilter() {
    const [inputLocation, setInputLocation] = useState('');
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adultCounter, setAdultCounter] = useState(0);
    const [childrenCounter, setChildrenCounter] = useState(0);
    const [infantCounter, setInfantCounter] = useState(0);
    const [petCounter, setPetCounter] = useState(0);
    const [totalGuestNumber, setTotalGuestNumber] = useState(0);
    const [showLocationFilter, setShowLocationFilter] = useState(false);
    const [showCheckInFilter, setShowCheckInFilter] = useState(false);
    const [showGuestsFilter, setShowGuestsFilter] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setTotalGuestNumber(adultCounter + childrenCounter + infantCounter);
    }, [adultCounter, childrenCounter, infantCounter, petCounter]);

    const handleLocationChange = (e) => {
        setInputLocation(e.target.value);
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

    function countUpAdultCounter() {
        setAdultCounter(prev => prev + 1);
    }

    function countDownAdultCounter() {
        setAdultCounter(prev => prev !== 0 ? prev - 1 : prev);
    }

    function countUpChildrenCounter() {
        setChildrenCounter(prev => prev + 1);
    }

    function countDownChildrenCounter() {
        setChildrenCounter(prev => prev !== 0 ? prev - 1 : prev);
    }

    function countUpInfantCounter() {
        setInfantCounter(prev => prev + 1);
    }

    function countDownInfantCounter() {
        setInfantCounter(prev => prev !== 0 ? prev - 1 : prev);
    }

    function countUpPetCounter() {
        setPetCounter(prev => prev + 1);
    }

    function countDownPetCounter() {
        setPetCounter(prev => prev !== 0 ? prev - 1 : prev);
    }

    function onWherePick(region) {
        setLocation(region);
        console.log("set ", region);
    }

    function onPickedDate(date) {
        setCheckIn(date[0].format('DD/MM/YYYY'));
        setCheckOut(date[1].format('DD/MM/YYYY'));
    }

    const handleSearchButtonClick = (e) => {
        e.stopPropagation();
        const params = {
            location,
            checkIn,
            checkOut,
            adults: adultCounter,
            children: childrenCounter,
            infants: infantCounter,
            pets: petCounter,
            totalGuests: totalGuestNumber
        };
        setSearchParams(params);
    };

    const guestCounter = {
        adultCounter: adultCounter,
        childrenCounter: childrenCounter,
        infantCounter: infantCounter,
        petCounter: petCounter,
        countUpAdultCounter,
        countDownAdultCounter,
        countUpChildrenCounter,
        countDownChildrenCounter,
        countUpInfantCounter,
        countDownInfantCounter,
        countUpPetCounter,
        countDownPetCounter
    };

    return (
        <div className='filter-container-big flex align-center relative'>
            <Popover
                placement='bottomLeft'
                className="location-filter-modal"
                content={<DynamicFilterComponent type="location" onWherePick={onWherePick} />}
                open={showLocationFilter}
                trigger="click"
                arrow={false}
                onOpenChange={onSearchLocationClick}
            >
                <div className="search-category location flex column align-left just-cont-left">
                    <div className='bold'>Where</div>
                    <input
                        type="text"
                        value={inputLocation}
                        onChange={handleLocationChange}
                        placeholder={location || `Search Destinations`}
                    />
                </div>
            </Popover>

            <span className="filter-splitter"></span>

            <Popover
                placement='bottom'
                content={<DynamicFilterComponent type="date" onPickedDate={onPickedDate} />}
                open={showCheckInFilter}
                trigger="click"
                arrow={false}
                onOpenChange={onCheckInClick}
            >
                <div className='check-in-out flex row center center align-center'>
                    <div className="search-category check-in flex column align-left just-cont-left">
                        <div className='bold'>Check in</div>
                        <div>{checkIn || `Add dates`}</div>
                    </div>
                    <span className="filter-splitter"></span>
                    <div className="search-category check-out flex column align-left just-cont-left">
                        <div className='bold'>Check out</div>
                        <div>{checkOut || `Add dates`}</div>
                    </div>
                </div>
            </Popover>

            <span className="filter-splitter"></span>

            <Popover
                placement='bottomRight'
                content={<DynamicFilterComponent type="guests" guestCounter={guestCounter} />}
                open={showGuestsFilter}
                trigger="click"
                arrow={false}
                onOpenChange={onGuestsClick}
            >
                <div className="search-category guests-button flex row align-center space-between">
                    <div className='guests-text flex column align-left just-cont-left'>
                        <div className='bold'>Guests</div>
                        <div>{totalGuestNumber + " Guests" || "Add guests"}</div>
                    </div>
                    <button className="mini-search-button big-search-button" onClick={handleSearchButtonClick}>
                        <div className='flex row center align-center'>
                        <IoSearch />
                        <h5>Search</h5>

                        </div>
                    </button>
                </div>
            </Popover>
        </div>
    );
}
