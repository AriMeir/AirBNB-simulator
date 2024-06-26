import { StayList } from './StayList';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function StayIndex() {
    const location = useLocation();
    const [isWish, setIsWish] = useState(false);

    useEffect(() => {
        if (location.pathname === '/wish') {
            console.log('You are on the wish page');
            setIsWish(true);
        } else {
            setIsWish(false);
        }
    }, [location.pathname]);

    return (
        <StayList isWish={isWish} />   
    );
}
