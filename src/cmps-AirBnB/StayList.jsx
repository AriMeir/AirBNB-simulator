import { useEffect } from 'react';
import { StayPreview } from './StayPreview';
import { useNavigate } from 'react-router-dom'; // Ensure the correct import

export function StayList({ stays, isWish, onHeartClick}) {


    const navigate = useNavigate();


    useEffect(() => {
        if(isWish)
        console.log("Im on the stay list, and I will take care of only the favorite locations")
    })


    return (
        <section className='stay-list'>
            {stays.map((stay, idx) => (
                <StayPreview className='stay-item'
                    key={stay._id}
                    stay={stay}
                    onClick={() => navigate(`/stay/${idx + 1}`)} // Dynamic path for illustration
                    onHeartClick={() => onHeartClick(stay)}
                />
            ))}
        </section>
    );
}
