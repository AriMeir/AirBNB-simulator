import React from 'react';
import { useEffect, useState } from 'react';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { useSelector } from 'react-redux';
import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
import { stayService } from '../services/stay.service';
import { svgIcons } from './Svgs';
import { StayGallerySlider } from "./StayGallerySlider";


export function StayPreview({ stay, onClick, onHeartClick }) {

    const [isHeartPressed, setIsHeartPressed] = useState(false)
    const [randomNumber, setRandomNumber] = useState(null)
    const [dateRange, setDateRange] = useState('')

    const handleHeartClick = (e) => {
        e.stopPropagation()
        setIsHeartPressed(!isHeartPressed)
        if (onHeartClick) onHeartClick()
    };

    function getRandomNumber(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    function getRandomDateRange() {
        const startDate = new Date(2024, 0, 1) // January 1st, 2024
        const endDate = new Date(2024, 11, 31) // December 31st, 2024
        const range = Math.floor(Math.random() * 31)
        const start = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
        const end = new Date(start.getTime() + range * 24 * 60 * 60 * 1000)
        const formatDate = (date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        return `${formatDate(start)} - ${formatDate(end)}`
    }

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array
    }

    const StayGallery = shuffleArray(stay.imgUrls.map((url, index) => ({
        title: `StayImg${index + 1}`,
        image: url
    })))

    return (
        <div className='stay-preview' onClick={onClick}>
            <div className='card-top full'>
                <StayGallerySlider className='stay-img' data={StayGallery} />
                <div className={`heart-icon ${isHeartPressed ? 'pressed' : ''}`} onClick={handleHeartClick}>
                    {svgIcons.heart}
                </div>
            </div>
            <div className='card-bottom full'>
            <div className='card-header'>
                <div>{stay.loc.country}, {stay.loc.city}</div>
                <div className='star-reviews'>
                    {svgIcons.starReview}
                    <p>
                        <span className="card-review">{(getRandomNumber(3.8, 4)).toFixed(1)}</span>
                    </p>
                </div>
            </div>
                <p>{Math.floor(getRandomNumber(80, 2000))} kilometers away</p>
                <p>{getRandomDateRange()}</p>
                <p className='card-price'><strong>${stay.price}</strong> night</p>
            </div>
        </div>
    );
}
