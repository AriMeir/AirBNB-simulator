import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStays, updateStay } from '../store-AirBnB/actions/stay.actions';
import { Categories } from './Categories';
import StayList from './StayList';

export function StayIndex() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isWish, setIsWish] = useState(false);

    const stays = useSelector(storeState => storeState.stayModule.stays);

    useEffect(() => {
        loadStays();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category') || '';
        setSelectedCategory(category);
    }, [location.search]);

    useEffect(() => {
        if (location.pathname === '/wish') {
            setIsWish(true);
        } else {
            setIsWish(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        const params = new URLSearchParams();
        if (selectedCategory) {
            params.set('category', selectedCategory);
        }
        navigate(`?${params.toString()}`, { replace: true });
    }, [selectedCategory, navigate]);


    const filteredStays = stays
        .filter(stay =>
            (stay.labels.includes(selectedCategory) || !selectedCategory) &&
            (!isWish || stay.likedByUsers.length > 0)
        );

    async function onUpdateStay(stay) {
        const userId = '101dd'
        const likedByUsers = stay.likedByUsers.includes(userId)
            ? stay.likedByUsers.filter(id => id !== userId)
            : [...stay.likedByUsers, userId]

        const stayToSave = { ...stay, likedByUsers }
        try {
            const savedStay = await updateStay(stayToSave)
            console.log(`Stay updated, user ${userId} toggled in wishlist: ${savedStay.likedByUsers} ${stay._id}`)
        } catch (err) {
            console.log('Cannot update stay', err)
        }
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div>
            <Categories onCategoryClick={handleCategoryClick} />
            <section>
                <StayList isWish={isWish} stays={filteredStays} onHeartClick={onUpdateStay} />
            </section>
        </div>
    )
}
