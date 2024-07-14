import { useEffect } from 'react';
import { StayPreview } from './StayPreview';
import { useNavigate } from 'react-router-dom';

export function StayList({ stays, isWish, onHeartClick}) {


    const navigate = useNavigate();


    useEffect(() => {
        if(isWish)
        console.log("Im on the stay list, and I will take care of only the favorite locations")
    },[isWish])

    const filteredStays = isWish ? stays.filter(stay => stay.likedByUsers.length > 0) : stays;

    return (
        <section className='stay-list'>
            {filteredStays.map((stay, idx) => (
                <StayPreview className='stay-item'
                    key={stay._id}
                    stay={stay}
                    onClick={() => navigate(`/stay/${idx + 1}`)}
                    onHeartClick={() => onHeartClick(stay)}
                />
            ))}
        </section>
    );
}
