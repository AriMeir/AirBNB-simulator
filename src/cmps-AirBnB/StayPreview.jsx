import React from 'react';
import { useEffect, useState } from 'react';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { useSelector } from 'react-redux';
import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
import { stayService } from '../services-AirBnB/stay.service';
import { svgIcons } from './Svgs'

export function StayPreview({ stay, onClick, onHeartClick}) {
    const [isHeartPressed, setIsHeartPressed] = useState(false);

    const handleHeartClick = (e) => {
        e.stopPropagation();
        setIsHeartPressed(!isHeartPressed);
        if (onHeartClick) onHeartClick();
    };

    return (
        <div className='stay-preview' onClick={onClick}>
            <div className='card-top full'>
                <img className='stay-img' src={stay.imgUrls[0]} alt={stay.name} />
                <div className={`heart-icon ${isHeartPressed ? 'pressed' : ''}`} onClick={handleHeartClick}>
                    {svgIcons.heart}
                </div>
            </div>
            <div className='card-bottom full'>
                <div className='card-header'>
                    <h1>Barcelona, Spain</h1>
                    <div className='star-reviews'>{svgIcons.starReview} 4.8</div>
                </div>
                <p>5000 kilometers away</p>
                <p>May 23 - Sep 1</p>
                <p>$200 night</p>
            </div>
        </div>
    )
}
