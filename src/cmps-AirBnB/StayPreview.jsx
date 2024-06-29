import React from 'react';
import { useEffect, useState } from 'react';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { useSelector } from 'react-redux';
import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
import { stayService } from '../services-AirBnB/stay.service';

export function StayPreview({ stay, onClick, onHeartClick}) {

    return (
        <div className='stay-preview border' onClick={onClick}>
            <p>{stay._id}</p>
            <button onClick={(e) => {
                e.stopPropagation(); // Prevent triggering onClick of the stay preview
                onHeartClick();
            }}>
                ♡
            </button>
        </div>
    )
}
