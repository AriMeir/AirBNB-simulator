import { useEffect } from 'react';
import { StayPreview } from './StayPreview';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function StayList({ stays, isWish, onHeartClick }) {
    
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (isWish) {
            console.log("I'm on wishlist");
        }
    }, [isWish]);

    const filteredStays = isWish ? stays.filter(stay => stay.likedByUsers.length > 0) : stays;

    const handleStayClick = (stayId) => {
        const location = searchParams.get('location');
        const checkIn = searchParams.get('checkIn');
        const checkOut = searchParams.get('checkOut');
        const totalGuests = searchParams.get('totalGuests');

        const params = new URLSearchParams();
        if (location) params.append('location', location);
        if (checkIn) params.append('checkIn', checkIn);
        if (checkOut) params.append('checkOut', checkOut);
        if (totalGuests) params.append('totalGuests', totalGuests);

        navigate(`/stay/${stayId}?${params.toString()}`);
    };

    return (
        <section className='stay-list'>
            {filteredStays.map((stay) => (
                <StayPreview
                    className='stay-item'
                    key={stay._id}
                    stay={stay}
                    onClick={() => handleStayClick(stay._id)}
                    onHeartClick={() => onHeartClick(stay)}
                />
            ))}
        </section>
    );
}
