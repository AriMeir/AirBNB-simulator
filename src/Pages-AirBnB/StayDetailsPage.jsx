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
                <section className='stay-details flex-column-center-left'>
                    <h1 className='stay-title'>Home, Sweet, Harlem. Welcome!</h1>
                    <div className='flex-row-center'>4.8•20 reviews• New York, NY, United States</div>
                    <div className='img-container'>
                        <div className='img border'>img</div>
                        <div className='img border'>img</div>
                        <div className='img border'>img</div>
                        <div className='img border'>img</div>
                        <div className='img border'>img</div>
                    </div>
                    <div className='mid-section grid'>
                        <div className='details'>
                            <div className='host-details border-botton pad-box'>
                                <div className='flex-row-center space-between'>
                                    <div className='host-details-text flex-column-left just-cont-left'>
                                        <h2>Private room hosted by Muki Host</h2>
                                        <span>2 guests • 1 bedroom • 2 beds • 1 bath</span>
                                    </div>
                                    <div className='host-detail-img border'>img</div>

                                </div>
                            </div>
                            <div className='stay-highlights border-botton pad-box'>


                                <div className='highlight flex align-left'>
                                    <div className='highlight-img'>img</div>
                                    <div className='highlight-text'>
                                        <h3>Great Location</h3>
                                        <p>100% of recent guests gave the location a 5-star rating.</p>
                                    </div>
                                </div>


                                <div className='highlight flex align-left'>
                                    <div className='highlight-img'>img</div>
                                    <div className='highlight-text'>
                                        <h3>Great check-in experiance</h3>
                                        <p>100% of recent guests gave the check-in process a 5-star rating.</p>
                                    </div>
                                </div>

                                <div className='highlight flex align-left'>
                                    <div className='highlight-img'>img</div>
                                    <div className='highlight-text'>
                                        <h3>Free cancellation before Jul 1</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                           


                            <div className='air-cover border-botton flex-column-left align-left pad-box'>
                                <div className='air-cover-img'>
                                    aircover
                                </div>
                                <p className='air-cover-txt'>
                                Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                                </p>
                            </div>
                            <div className='stay-summory-spanish flex-column-left align-left border-botton pad-box'>
                                <p>
                                Welcome! Upgrades Added as of January 2018 This listing is located in the Spanish Harlem Section of Manhattan. I offer a cozy apartment that has great transportation in and out the city! The area has a lot of ethnic restaurants and a lot of local, active residents. This residence is great for a quick, inexpensive stay in New York whether its for business, travel, or personal purposes. I am glad to welcome all guests!
                                </p>
                                
                            </div>


                                   

                            <div className='stay-amenities border-botton pad-box'>
                                <h4>What this place offers</h4>
                                <ul className='amenities-container'>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                  <li><div>img</div> <span className='amenity-name'>wifi</span></li>
                                </ul>

                            </div>
                            
                            <div className='stay-calender  border-botton pad-box'>
                                <div className='date-picker-header'>
                                    <h4>5 nights</h4>
                                    <h5>dates</h5>
                                </div>
                                <div className='calender-wrapper'>
                                    There will be a calender here
                                </div>
                                <div className='date-picker-buttons flex-row-center space-between'>
                                    <button>Select guests</button>
                                    <button>Clear dates</button>
                                </div>
                            </div>
                            <div className='guest-select-list border-botton pad-box'>
                                guest select list
                            </div>

                        </div>
                        <div className='reservation-container  flex just-cont-start align-start'>
                            <div className='reservation-form-container flex'>
                                <div className='reservation-form flex center align-center ' onClick={reserveOrder}>
                                    reservation
                                </div>
                            </div>
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
