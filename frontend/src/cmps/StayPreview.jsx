import React, { useEffect, useState } from 'react';
import { svgIcons } from './Svgs';
import { StayGallerySlider } from "./StayGallerySlider";

export function StayPreview({ stay, onClick, onHeartClick }) {
    const [isHeartPressed, setIsHeartPressed] = useState(false);
    const [randomNumber] = useState(() => getRandomNumber(80, 2000))
    const [dateRange] = useState(() => getRandomDateRange())
    const [reviewScore] = useState(() => getRandomNumber(3.8, 4).toFixed(1))

    const handleHeartClick = (e) => {
        e.stopPropagation()
        setIsHeartPressed(!isHeartPressed)
        if (onHeartClick) onHeartClick()
    };

    function getRandomNumber(min, max) {
        return Math.random() * (max - min + 1) + min
    }

    function getRandomDateRange() {
        const startDate = new Date(2024, 0, 1); // January 1st, 2024
        const endDate = new Date(2024, 11, 31); // December 31st, 2024
        const range = Math.floor(Math.random() * 31);
        const start = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
        const end = new Date(start.getTime() + range * 24 * 60 * 60 * 1000);
        const formatDate = (date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        return `${formatDate(start)} - ${formatDate(end)}`
    }

    const StayGallery = stay.imgUrls.map((url, index) => ({
        title: `StayImg${index + 1}`,
        image: url
    }));

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
                            <span className="card-review">{reviewScore}</span>
                        </p>
                    </div>
                </div>
                <p>{Math.floor(randomNumber)} kilometers away</p>
                <p>{dateRange}</p>
                <p className='card-price'><strong>${stay.price}</strong> night</p>
            </div>
        </div>
    )
}
