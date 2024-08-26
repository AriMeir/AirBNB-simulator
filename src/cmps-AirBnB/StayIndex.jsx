import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStays, updateStay } from '../store-AirBnB/actions/stay.actions';
import { StayList } from './StayList';

export function StayIndex() {
    const location = useLocation()
    const [selectedCategory, setSelectedCategory] = useState('')
    const [isWish, setIsWish] = useState(false)

    const [filters, setFilters] = useState({
        location: '',
        checkIn: '',
        checkOut: '',
        totalGuests: 0,
    });

    const stays = useSelector(storeState => storeState.stayModule.stays)

    useEffect(() => {
        loadStays()
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const category = params.get('category') || ''
        const locationFilter = params.get('location') || ''
        const checkInFilter = params.get('checkIn') || ''
        const checkOutFilter = params.get('checkOut') || ''
        const totalGuests = params.get('totalGuests') || 0

        setSelectedCategory(category)

        setFilters({
            location: locationFilter,
            checkIn: checkInFilter,
            checkOut: checkOutFilter,
            totalGuests: Number(totalGuests),
        });
    }, [location.search]);

    useEffect(() => {
        if (location.pathname === '/wish') {
            setIsWish(true)
        } else {
            setIsWish(false)
        }
    }, [location.pathname])

    const filteredStays = stays
        .filter(stay => {
            const categoryMatch = stay.labels.includes(selectedCategory) || !selectedCategory
            const locationMatch = filters.location === "I'm Flexible" ||
            (stay.loc.region && stay.loc.region.toLowerCase().includes(filters.location.toLowerCase())) ||
            !filters.location;
            const guestMatch = (stay.capacity >= (filters.totalGuests ));

            return categoryMatch && locationMatch && guestMatch && (!isWish || stay.likedByUsers.length > 0);
        })

    async function onUpdateStay(stay) {
        const userId = '101dd'
        const likedByUsers = stay.likedByUsers.includes(userId)
            ? stay.likedByUsers.filter(id => id !== userId)
            : [...stay.likedByUsers, userId]

        const stayToSave = { ...stay, likedByUsers }
        try {
            const savedStay = await updateStay(stayToSave);
            console.log(`Stay updated, user ${userId} toggled in wishlist: ${savedStay.likedByUsers} ${stay._id}`)
        } catch (err) {
            console.log('Cannot update stay', err)
        }
    }

    return (
        <div>
            <section>
                <StayList isWish={isWish} stays={filteredStays} onHeartClick={onUpdateStay} />
            </section>
        </div>
    );
}
