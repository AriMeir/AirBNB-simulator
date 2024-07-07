import { useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../cmps-AirBnB/Header';
import { ConfirmationPage } from './ConfirmationPage';
import { useState } from 'react';
import { GuestCounter } from '../cmps-AirBnB/GuestCounter';
import { ReviewScoreBar } from '../cmps-AirBnB/ReviewScoreBar';
import { MiniUserReview } from '../cmps-AirBnB/MiniUserReview';
import { ReviewPopUp } from '../cmps-AirBnB/ReviewPopUp';
import { MapComponent } from '../cmps-AirBnB/MapComponent';
import { ReservationContainer } from '../cmps-AirBnB/ReservationContainer';

export function StayDetailsPage() {
    const [showReviews, setShowReviews] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [showGuestsSection, setShowGuestsSection] = useState(false)
    const [adultCounter,setAdultCounter] = useState(0)
    const [childrenCounter,setChildrenCounter] = useState(0)
    const [infantCounter,setInfantCounter] = useState(0)
    const [petCounter,setPetCounter] = useState(0)
    const navigate = useNavigate();

    function onShowReviews(){
        setShowReviews(true)
    }
    function onCloseReviews(){
        setShowReviews(false)
    }

    function countUpAdultCounter() {
        console.log("I'm here");
        setAdultCounter(prev => prev + 1);
    }
    
    function countDownAdultCounter() {
        setAdultCounter(prev => prev !== 0 ? prev - 1 : prev);
    }
    
    function countUpChildrenCounter() {
        setChildrenCounter(prev => prev + 1);
    }
    
    function countDownChildrenCounter() {
        setChildrenCounter(prev => prev !== 0 ? prev - 1 : prev);
    }
    
    function countUpInfantCounter() {
        setInfantCounter(prev => prev + 1);
    }
    
    function countDownInfantCounter() {
        setInfantCounter(prev => prev !== 0 ? prev - 1 : prev);
    }
    
    function countUpPetCounter() {
        setPetCounter(prev => prev + 1);
    }
    
    function countDownPetCounter() {
        setPetCounter(prev => prev !== 0 ? prev - 1 : prev);
    }
    

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
    
    function toggleGuestsSection() {
        setShowGuestsSection(prev => !prev);
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
                    <div className='mid-section grid border-bottom'>
                        <div className='details'>
                            <div className='host-details border-bottom pad-box'>
                                <div className='flex-row-center space-between'>
                                    <div className='host-details-text flex-column-left just-cont-left'>
                                        <h2>Private room hosted by Muki Host</h2>
                                        <span>2 guests • 1 bedroom • 2 beds • 1 bath</span>
                                    </div>
                                    <div className='host-detail-img border'>img</div>
                                </div>
                            </div>
                            <div className='stay-highlights border-bottom pad-box'>
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
                            <div className='air-cover border-bottom flex-column-left align-left pad-box'>
                                <div className='air-cover-img'>
                                    aircover
                                </div>
                                <p className='air-cover-txt'>
                                    Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                                </p>
                            </div>
                            <div className='stay-summory-spanish flex column center align-left border-bottom pad-box'>
                                <p>
                                    Welcome! Upgrades Added as of January 2018 This listing is located in the Spanish Harlem Section of Manhattan. I offer a cozy apartment that has great transportation in and out the city! The area has a lot of ethnic restaurants and a lot of local, active residents. This residence is great for a quick, inexpensive stay in New York whether its for business, travel, or personal purposes. I am glad to welcome all guests!
                                </p>
                            </div>
                            <div className='stay-amenities border-bottom pad-box'>
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
                            <div className='stay-calender  border-bottom pad-box'>
                                <div className='date-picker-header'>
                                    <h4>5 nights</h4>
                                    <h5>dates</h5>
                                </div>
                                <div className='calender-wrapper'>
                                    There will be a calender here
                                </div>
                                <div className='date-picker-buttons flex row align-center space-between'>
                                    <button onClick={toggleGuestsSection}>Select guests</button>
                                    <button>Clear dates</button>
                                </div>
                            </div>
                            {showGuestsSection && (
                                <div className='guest-select-list border-bottom pad-box'>
                                    <button onClick={toggleGuestsSection}>X</button>
                                    <GuestCounter header={'Adults'}
                                                subHeader={'Ages 13 or above'}
                                                countUp={countUpAdultCounter}
                                                countDown={countDownAdultCounter}
                                                counter={adultCounter}
                                                lastOne={false}/>
                                    <GuestCounter header={'Children'}
                                                subHeader={'Ages 2-12'}
                                                countUp={countUpChildrenCounter}
                                                countDown={countDownChildrenCounter}
                                                counter={childrenCounter}
                                                lastOne={false}/>
                                    <GuestCounter header={'Infants'} 
                                                subHeader={'Under 2'}
                                                countUp={countUpInfantCounter}
                                                countDown={countDownInfantCounter}
                                                counter={infantCounter}
                                                lastOne={false}/>
                                    <GuestCounter header={'Pets'} 
                                                subHeader={'Bringing a Service Animal?'}
                                                countUp={countUpPetCounter}
                                                countDown={countDownPetCounter}
                                                counter={petCounter}
                                                lastOne={true}/>
                                                
                                </div>
                            )}
                        </div>
                       <ReservationContainer/>

                    </div>






                    <div className='reviews pad-box flex column border-bottom'>
                        <h2> 4.73 • 2 reviews</h2>
                        <div className='review-bar grid'>
                            <div className='first-review-column'>
                                <ReviewScoreBar header={'Cleanliness'} score={3.7}/>
                                <ReviewScoreBar header={'Communication'} score={4.85}/>
                                <ReviewScoreBar header={'Check-in'} score={3.7}/>
                            </div>
                            <div className='second-review-column'>
                                <ReviewScoreBar header={'Accuracy'} score={5}/>
                                <ReviewScoreBar header={'Location'} score={4.89}/>
                                <ReviewScoreBar header={'Value'} score={4.75}/>
                            </div>
                        </div>
                        <div className='review-list grid'>
                        <MiniUserReview reviewerName={'Andrey'} reviewDate={'Jan 2023'} review={'This place was perfect for my family. We had plenty of room to spread out and the service could not'} />
                        <MiniUserReview reviewerName={'Kimberly'} reviewDate={'Jan 2023'} review={'We love Westin Kaanapalli'}/>
                        <MiniUserReview reviewerName={'Quentin'} reviewDate={'Jan 2023'} review={'I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). Nihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. Hosça kal!'}/>
                        <MiniUserReview reviewerName={'Jess'} reviewDate={'Jan 2023'} review={'We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!'}/>
                        <MiniUserReview reviewerName={'Steve'} reviewDate={'Jan 2023'} review={'Nice room in a flat well located. Nihat is very nce and helpful. Good experience.'}/>
                        <MiniUserReview reviewerName={'Steve'} reviewDate={'Jan 2023'} review={'The flat is clean and and very good located, 3 minutes walk to Taksim Square. The bedroom is quiet at night, even though there is a crowded area next to the flat. Nihat was always extremely quick in answering our emails and let us feel comfortable. He is really kind and discrete, we met him few times cause he works in the evening.'}/>
                    </div>
                    <div>
                    <button className='show-reviews-btn' onClick={onShowReviews}>Show all 22 reviews</button>
                    </div>
                    </div>
                    <MapComponent/>
                   {showReviews && <ReviewPopUp onClose={onCloseReviews}/>}
                    <div className='pad-box'>
                        <button className='contact-hose-btn'>Contact host</button>
                    </div>
                </section>

            )}
        </>
    );
}
