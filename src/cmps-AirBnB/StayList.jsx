import { useEffect } from 'react';
import { StayPreview } from './StayPreview';
import { useNavigate } from 'react-router-dom';

export function StayList({ stays, isWish, onHeartClick }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (isWish) {
            console.log("I'm on wishlist");
        }
    }, [isWish]);

    const filteredStays = isWish ? stays.filter(stay => stay.likedByUsers.length > 0) : stays;

    return (
        <section className='stay-list'>
            {filteredStays.map((stay) => (
                <StayPreview
                    className='stay-item'
                    key={stay._id}
                    stay={stay}
                    onClick={() => navigate(`/stay/${stay._id}`)}
                    onHeartClick={() => onHeartClick(stay)}
                />
            ))}
        </section>
    );
}
