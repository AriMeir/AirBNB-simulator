import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStays, updateStay } from '../store-AirBnB/actions/stay.actions';
import { StayList } from './StayList';

export function StayIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isWish, setIsWish] = useState(false)

    const [filters, setFilters] = useState({
        category: '',
        location: '',
        checkIn: '',
        checkOut: '',
        totalGuests: 0,
    })

    const stays = useSelector(storeState => storeState.stayModule.stays)


    useEffect(() => {
        const category = searchParams.get('category') || ''
        const location = searchParams.get('location') || ''
        const checkIn = searchParams.get('checkIn') || ''
        const checkOut = searchParams.get('checkOut') || ''
        const totalGuests = searchParams.get('totalGuests') || 0
        setFilters({category,location,checkIn,checkOut,totalGuests: Number(totalGuests)})
    }, [searchParams])

    useEffect(() => {
        const filterBy = {
            category: filters.category,
            location: filters.location,
            checkIn: filters.checkIn,
            checkOut: filters.checkOut,
            totalGuests: filters.totalGuests
        }
        loadStays(filterBy)
    }, [filters])

    useEffect(() => {
        setIsWish(location.pathname === '/wish')
    }, [location.pathname])


    function onFilterStays() {
        const newParams = new URLSearchParams(filters)
        setSearchParams(newParams)
    }

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


    return (
        <div>
            <section>
                <StayList isWish={isWish} stays={stays} onFilterStays={onFilterStays} onHeartClick={onUpdateStay} />
            </section>
        </div>
    )
}
