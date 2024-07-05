import React from 'react';
import { useEffect, useState } from 'react';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { useSelector } from 'react-redux';
import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
import { stayService } from '../services-AirBnB/stay.service';

export function StayPreview({ stay, onClick, onHeartClick}) {

    return (
        <div className='stay-preview border' onClick={onClick}>
            {stay.imgUrls[1]}
            <button onClick={(e) => {
                e.stopPropagation()
                onHeartClick()
            }}>
                ♡
            </button>
            <div className='card full'>
                <h1>Barcelona, Spain</h1>
                <p>5000 kilometers away</p>
                <p>May 23 - Sep 1</p>
                <p>$200 night</p>
            </div>
        </div>
    )
}
