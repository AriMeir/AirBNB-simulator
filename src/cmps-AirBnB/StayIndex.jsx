import { StayList } from './StayList';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStays, updateStay } from '../store-AirBnB/actions/stay.actions';


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

    useEffect(() => {
        if (location.pathname === '/wish') {
            console.log('You are on the wish page');
            setIsWish(true);
        } else {
            setIsWish(false);
        }
    }, [location.pathname]);

    //functions
    async function onUpdateStay(stay) {
        const userId = '101dd'; // Replace this with the actual logged-in user ID
        const likedByUsers = stay.likedByUsers.includes(userId)
            ? stay.likedByUsers.filter(id => id !== userId)
            : [...stay.likedByUsers, userId];

        const stayToSave = { ...stay, likedByUsers }
        try {
            const savedStay = await updateStay(stayToSave)
            console.log(`Stay updated, user ${userId} toggled in wishlist: ${savedStay.likedByUsers} ${stay._id}`)
        } catch (err) {
            console.log('Cannot update stay', err)
        }
    }

    const filteredStays = isWish ? stays.filter(stay => stay.likedByUsers.length > 0) : stays;

    return (
        <section>
            <StayList isWish={isWish} stays={filteredStays} onHeartClick={onUpdateStay} />
        </section>
    );
}
