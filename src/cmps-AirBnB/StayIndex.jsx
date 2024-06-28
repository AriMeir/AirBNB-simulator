import { StayList } from './StayList';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStays } from '../store-AirBnB/actions/stay.actions';


export function StayIndex() {
    //consts
    const location = useLocation();
    const [isWish, setIsWish] = useState(false);

    const stays = useSelector(storeState => storeState.stayModule.stays)

    //useEffects
    useEffect(() => {
        loadStays()
        console.log({stays})
    }, [])




    //functions
    async function onUpdateStay(stay) {
        const stayToSave = { ...stay, likedByUsers: ['101dd'] }
        try {
            const savedStay = await updateStay(stayToSave)
            console.log(`Stay updated, new user add to wishlist: ${savedStay.likedByUsers}`)
        } catch (err) {
            console.log('Cannot update stay')
        }
    }


    useEffect(() => {
        if (location.pathname === '/wish') {
            console.log('You are on the wish page');
            setIsWish(true);
        } else {
            setIsWish(false);
        }
    }, [location.pathname]);





    return (
        <StayList isWish={isWish} stays={stays} />
    );
}
