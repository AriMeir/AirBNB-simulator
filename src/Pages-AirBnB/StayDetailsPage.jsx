import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../cmps-AirBnB/Header';
import { ConfirmationPage } from './ConfirmationPage';

export function StayDetailsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    function reserveOrder() {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set('checkInDate', 'new');
            params.set('checkOutDate', 'new');
            params.set('price', 'new');
            params.set('adults', 'new');
            return params;
        });
    }

    const hasSearchParams = searchParams.has('checkInDate') && searchParams.has('checkOutDate') && searchParams.has('price') && searchParams.has('adults');

    return (
        <>
            {hasSearchParams ? (
                <ConfirmationPage />
            ) : (
                <section className='stay-details'>
                    <h1 className='stay-title'>Name of the place</h1>
                    <div className='flex-row-center'>rating, reviews, location</div>
                    <div className='img-container'>
                        <div className='img'>img</div>
                        <div className='img'>img</div>
                        <div className='img'>img</div>
                        <div className='img'>img</div>
                        <div className='img'>img</div>
                    </div>
                    <div className='mid-section grid'>
                        <div className='details'>details</div>
                        <div className='reservation-container'>
                            <div className='reservation' onClick={reserveOrder}>reservation</div>
                        </div>
                    </div>
                    <div className='reviews'>reviews</div>
                    <div className='map'>
                        <h4>Where you'll be</h4>
                        <div className='address text'>address</div>
                        <div className='map-preview'>map</div>
                    </div>
                </section>
            )}
        </>
    );
}
