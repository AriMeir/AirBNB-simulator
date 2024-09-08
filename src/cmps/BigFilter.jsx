import React, { useState, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { DynamicFilterComponent } from './DynamicFilterComponent'
import { Popover } from 'antd'
import { useSearchParams } from 'react-router-dom'

export function BigFilter({openSmallHeader}) {
    const [inputLocation, setInputLocation] = useState('')
    const [location, setLocation] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [adultCounter, setAdultCounter] = useState(0)
    const [childrenCounter, setChildrenCounter] = useState(0)
    const [infantCounter, setInfantCounter] = useState(0)
    const [petCounter, setPetCounter] = useState(0)
    const [totalGuestNumber, setTotalGuestNumber] = useState(0)
    const [showLocationFilter, setShowLocationFilter] = useState(false)
    const [showCheckInFilter, setShowCheckInFilter] = useState(false)
    const [showCheckOutFilter, setShowCheckOutFilter] = useState(false)
    const [showGuestsFilter, setShowGuestsFilter] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeFilter, setActiveFilter] = useState('')

    useEffect(() => {
        setTotalGuestNumber(adultCounter + childrenCounter + infantCounter + petCounter)
    }, [adultCounter, childrenCounter, infantCounter, petCounter])

    const handleLocationChange = (e) => {
        setInputLocation(e.target.value)
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter)
        setShowLocationFilter(filter === 'location')
        setShowCheckInFilter(filter === 'check-in')
        setShowCheckOutFilter(filter === 'check-out')
        setShowGuestsFilter(filter === 'guests')
    }

    const onSearchLocationClick = (visible) => {
        if (visible) {
            handleFilterClick('location')
        } else if (!showCheckInFilter && !showCheckOutFilter && !showGuestsFilter) {
            handleFilterClick('')
        }
    }

    const onCheckInClick = (visible) => {
        if (visible) {
            handleFilterClick('check-in')
        } else if (!showCheckOutFilter && !showGuestsFilter) {
            handleFilterClick('')
        }
    }

    const onCheckOutClick = (visible) => {
        if (visible) {
            handleFilterClick('check-out')
        } else if (!showCheckInFilter && !showGuestsFilter) {
            handleFilterClick('')
        }
    }

    const onGuestsClick = (visible) => {
        if (visible) {
            handleFilterClick('guests')
        } else if (!showLocationFilter && !showCheckInFilter && !showCheckOutFilter) {
            handleFilterClick('')
        }
    }

    function countUpAdultCounter() {
        setAdultCounter(prev => prev + 1)
    }

    function countDownAdultCounter() {
        setAdultCounter(prev => prev !== 0 ? prev - 1 : prev)
    }

    function countUpChildrenCounter() {
        setChildrenCounter(prev => prev + 1)
    }

    function countDownChildrenCounter() {
        setChildrenCounter(prev => prev !== 0 ? prev - 1 : prev)
    }

    function countUpInfantCounter() {
        setInfantCounter(prev => prev + 1)
    }

    function countDownInfantCounter() {
        setInfantCounter(prev => prev !== 0 ? prev - 1 : prev)
    }

    function countUpPetCounter() {
        setPetCounter(prev => prev + 1)
    }

    function countDownPetCounter() {
        setPetCounter(prev => prev !== 0 ? prev - 1 : prev)
    }

    function onWherePick(region) {
        setLocation(region)
        setShowLocationFilter(false)
        handleFilterClick('check-in')
    }

    function onPickedDate(date) {
        setCheckIn(date[0].format('DD/MM/YYYY'))
        setCheckOut(date[1].format('DD/MM/YYYY'))
        setShowCheckInFilter(false)
        handleFilterClick('guests')
    }

    const handleSearchButtonClick = (e) => {
        e.stopPropagation()
        const params = {
            location,
            checkIn,
            checkOut,
            adults: adultCounter,
            children: childrenCounter,
            infants: infantCounter,
            pets: petCounter,
            totalGuests: totalGuestNumber
        }
        setSearchParams(params)
        handleFilterClick('') // Reset active filter state
        openSmallHeader()
    }

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
    }

    function handleImFlexibleClick() {
        const date1 = new Date()
        const date2 = new Date()
        date2.setDate(date2.getDate() + 7)

        const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
        }
        setCheckIn(formatDate(date1))
        setCheckOut(formatDate(date2))

        setShowCheckInFilter(false)
        handleFilterClick('guests')
    }

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
                <div className={`search-category location flex column align-left just-cont-left ${activeFilter === 'location' ? 'active' : ''}`}>
                    <div className='filter-header'>Where</div>
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
                content={<DynamicFilterComponent type="date" onPickedDate={onPickedDate} handleImFlexibleClick={handleImFlexibleClick} />}
                open={showCheckInFilter || showCheckOutFilter}
                trigger="click"
                arrow={false}
                onOpenChange={(visible) => {
                    if (visible) {
                        if (activeFilter === 'check-in') {
                            onCheckInClick(true)
                        } else if (activeFilter === 'check-out') {
                            onCheckOutClick(true)
                        }
                    } else {
                        if (activeFilter === 'check-in') {
                            onCheckInClick(false)
                        } else if (activeFilter === 'check-out') {
                            onCheckOutClick(false)
                        }
                    }
                }}
            >
                <div className={`check-in-out flex row center center align-center`}>
                    <div
                        className={`search-category check-in flex column align-left just-cont-left ${activeFilter === 'check-in' ? 'active-check-in' : ''}`}
                        onClick={() => handleFilterClick('check-in')}
                    >
                        <div className='filter-header'>Check in</div>
                        <div>{checkIn || `Add dates`}</div>
                    </div>
                    <span className="filter-splitter"></span>
                    <div
                        className={`search-category check-out flex column align-left just-cont-left ${activeFilter === 'check-out' ? 'active-check-out' : ''}`}
                        onClick={() => handleFilterClick('check-out')}
                    >
                        <div className='filter-header'>Check out</div>
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
                <div className={`search-category guests-button flex row align-center space-between ${activeFilter === 'guests' ? 'active' : ''}`}>
                    <div className='guests-text flex column align-left just-cont-left'>
                        <div className='filter-header'>Guests</div>
                        <div>{totalGuestNumber + " Guests" || "Add guests"}</div>
                    </div>
                    <button className={`mini-search-button big-search-button`} onClick={handleSearchButtonClick}>
                        <div className='flex row center align-center'>
                            <IoSearch className='search-button-filter'/>
                            <h5>Search</h5>
                        </div>
                    </button>
                </div>
            </Popover>
        </div>
    )
}
