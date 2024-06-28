import { useEffect } from 'react';
import { StayPreview } from './StayPreview';
import { useNavigate } from 'react-router-dom'; // Ensure the correct import

export function StayList({ stays, isWish}) {

    
    const navigate = useNavigate();


    useEffect(() => {
        if(isWish)
        console.log("Im on the stay list, and I will take care of only the favorite locations")
    })


    return (
        <section className='stay-list grid'>
            {stays.map((stay, idx) => (
                <StayPreview
                    key={stay._id}
                    stay={stay}
                    onClick={() => navigate(`/stay/${idx + 1}`)} // Dynamic path for illustration
                />
            ))}
        </section>
    );
}
