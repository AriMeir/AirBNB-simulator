import React from 'react';
import { useEffect, useState } from 'react';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { useSelector } from 'react-redux';
import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
import { stayService } from '../services-AirBnB/stay.service';

export function StayPreview({ preview, onClick, onHeartClick}) {

    // const stays = useSelector(storeState => storeState.stayModule.stays)

    useEffect(() => {
        loadStays()
    }, [])

    async function onUpdateStay(stay) {
        const stayToSave = { ...stay, likedByUsers: ['101dd'] }
        try {
            const savedStay = await updateStay(stayToSave)
            console.log(`Stay updated, new user add to wishlist: ${savedStay.likedByUsers}`)
        } catch (err) {
            console.log('Cannot update stay')
        }
    }

    return (
        <div className='stay-preview border' onClick={onClick}>
            <p>{preview}</p>
            <button onClick={onUpdateStay}>♡︎</button>
        </div>
    )
}
