
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../cmps-AirBnB/Header';
import { ConfirmationPage } from './ConfirmationPage';
import { useState, useEffect } from 'react';
import { GuestCounter } from '../cmps-AirBnB/GuestCounter';
import { ReviewScoreBar } from '../cmps-AirBnB/ReviewScoreBar';
import { MiniUserReview } from '../cmps-AirBnB/MiniUserReview';
import { ReviewPopUp } from '../cmps-AirBnB/ReviewPopUp';
import { MapComponent } from '../cmps-AirBnB/MapComponent';
import { ReservationContainer } from '../cmps-AirBnB/ReservationContainer';
import { addTrip } from '../store-AirBnB/actions/trip.actions';
import { fetchSVG } from '../store-AirBnB/svg/SvgStore';
import { BasicRangeShortcuts } from '../cmps-AirBnB/BasicRangeShortcuts';
import { Reservation } from '../cmps-AirBnB/Reservation';




export function StayDetailsPage() {
    
    const [pickedCheckInDate, setPickedCheckInDate] = useState(false)
    const [pickedCheckOutDate, setPickedCheckOutDate] = useState(false)
    const [price, setPrice] = useState(15000)
    const [fee, setFee] = useState(400)
    const [showReviews, setShowReviews] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [showGuestsSection, setShowGuestsSection] = useState(false)
    const [adultCounter,setAdultCounter] = useState(0)
    const [childrenCounter,setChildrenCounter] = useState(0)
    const [infantCounter,setInfantCounter] = useState(0)
    const [petCounter,setPetCounter] = useState(0)
    const [totalGuestNumber, setTotalGuestNumber] = useState(0)
    const navigate = useNavigate();
   



    useEffect(() => {
        setTotalGuestNumber(adultCounter + childrenCounter + infantCounter + petCounter);
    }, [adultCounter, childrenCounter, infantCounter, petCounter]);



    function onShowReviews(){
        setShowReviews(true)
    }
    function onCloseReviews(){
        setShowReviews(false)
    }

     

    function countUpAdultCounter() {
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
    const guestCounter = {
        totalGuestNumber: totalGuestNumber,
        adultCounter: adultCounter,
        childrenCounter: childrenCounter,
        infantCounter: infantCounter,
        petCounter: petCounter,
        countUpAdultCounter,
        countDownAdultCounter,
        countUpChildrenCounter,
        countDownChildrenCounter,
        countUpInfantCounter,
        countDownInfantCounter,
        countUpPetCounter,
        countDownPetCounter
    };
    

    function onReserveOrder() {
        if (pickedCheckInDate && pickedCheckOutDate && totalGuestNumber && price) {
            setSearchParams((prev) => {
                const params = new URLSearchParams(prev);
                params.set('checkInDate', pickedCheckInDate);
                params.set('checkOutDate', pickedCheckOutDate);
                params.set('price', price);
                params.set('fee', fee)
                params.set('guests', totalGuestNumber);
                return params;
            });
        }
    }
    async function onConfirmTrip(stayId, checkInDate, checkOutDate, guests, price, fee ) {
                try {
                const newTrip =
        {
           
            hostId: "u102",
            buyer: {
            _id: "u101",
            fullname: "Ari Meir"
            },
            totalPrice: parseInt(price) + parseInt(fee),
            startDate: checkInDate,
            endDate: checkOutDate,
            guests: {
            adults: guests,
            kids: 2
            },
            stay: {
            id: stayId,
            name: "House Of Ari Meir",
            price: 80.00
            },
            msgs: [],
            status: "pending" // approved, rejected
        }
        await addTrip(newTrip)
        navigate('/stay')
        } catch(e) {
            console.log(e)
        }


    }





    function onPickedCheckInDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        setPickedCheckInDate(formattedDate);
    }
    function onPickedCheckOutDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = today.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        setPickedCheckOutDate(formattedDate);
    }
    
    function toggleGuestsSection() {
        setShowGuestsSection(prev => !prev);
    }

    const hasSearchParams = searchParams.has('checkInDate')
                            && searchParams.has('checkOutDate')
                            && searchParams.has('price')
                            && searchParams.has('fee')
                            && searchParams.has('guests');

    return (
        <>
            {hasSearchParams ? (
                <section className='confirmation-page flex-column-center-left'>
                <ConfirmationPage onConfirmTrip={onConfirmTrip} />
                </section>
            ) : (
                <section className='stay-details flex-column-center-left'>
                    <h1 className='stay-title'>Home, Sweet, Harlem. Welcome!</h1>
                    
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
                                        <span className='lil-info'>2 guests • 1 bedroom • 2 beds • 1 bath</span>
                                    </div>
                                    <div className='host-detail-img border'>img</div>
                                </div>
                            </div>
                            <div className='stay-highlights border-bottom pad-box'>
                                <div className='highlight flex align-left'>
                                    <div className='highlight-img'>{fetchSVG("great for remote work")}</div>
                                    <div className='highlight-text'>
                                        <h3>Great for remote work</h3>
                                        <p>Fast wifi at 137 Mbps, plus a dedicated workspace.</p>
                                    </div>
                                </div>
                                <div className='highlight flex align-left'>
                                    <div className='highlight-img'>{fetchSVG("self_check_in")}</div>
                                    <div className='highlight-text'>
                                        <h3>Great check-in experiance</h3>
                                        <p>Check yourself in with the smartlock</p>
                                    </div>
                                </div>
                                <div className='highlight flex align-left'>
                                    <div className='highlight-img'>{fetchSVG("free_cancellation_for_48_hours")}</div>
                                    <div className='highlight-text'>
                                        <h3>Free cancellation for 48 hours</h3>
                                        <p>Get a full refund if you change your mind.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='air-cover border-bottom flex-column-left align-left pad-box'>
                                <div className='air-cover-img'>
                                    <img src='img/airCover.webp'></img>
                                </div>
                                <p className='air-cover-txt'>
                                    Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                                </p>
                            </div>
                            <div className='stay-summory-spanish flex column center align-left border-bottom pad-box'>
                                <h3>About this place</h3>
                                <p>
                                    Welcome! Upgrades Added as of January 2018 This listing is located in the Spanish Harlem Section of Manhattan. I offer a cozy apartment that has great transportation in and out the city! The area has a lot of ethnic restaurants and a lot of local, active residents. This residence is great for a quick, inexpensive stay in New York whether its for business, travel, or personal purposes. I am glad to welcome all guests!
                                </p>
                            </div>
                            <div className='stay-amenities border-bottom pad-box'>
                                <h3>What this place offers</h3>
                                <ul className='amenities-container'>
                                    <li><div>{fetchSVG("wifi")}</div> <span className='amenity-name'>wifi</span></li>
                                    <li><div>{fetchSVG("conditioner")}</div> <span className='amenity-name'>kitchen</span></li>
                                    <li><div>{fetchSVG("great for remote work")}</div> <span className='amenity-name'>wifi</span></li>
                                    <li><div>{fetchSVG("wifi")}</div> <span className='amenity-name'>wifi</span></li>
                                    <li><div>{fetchSVG("wifi")}</div> <span className='amenity-name'>wifi</span></li>
                                    <li><div>{fetchSVG("wifi")}</div> <span className='amenity-name'>wifi</span></li>
                                    <li><div>{fetchSVG("wifi")}</div> <span className='amenity-name'>wifi</span></li>
                                    <li><div>{fetchSVG("wifi")}</div> <span className='amenity-name'>wifi</span></li>
                                </ul>
                                <div>
                                <button className='show-amenities-btn' onClick={onShowReviews}>Show all 15 amenities</button>
                                </div>
                                
                            </div>
                            <div className='stay-calender  border-bottom pad-box'>
                                <div className='date-picker-header'>
                                    <h2>5 nights</h2>
                                    
                                </div>
                                <div className='calender-wrapper'>
                                   <BasicRangeShortcuts/>
                                </div>
                                <div className='date-picker-buttons flex row align-center space-between'>
                                    <button className='inline-btn' onClick={toggleGuestsSection}>Select guests</button>
                                    <button className='inline-btn'>Clear dates</button>
                                </div>
                            </div>
                            {showGuestsSection && (
                                <div className='guest-select-list border-bottom pad-box'>
                                    <button className='x-btn' onClick={toggleGuestsSection}>X</button>
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
                        <div className='reservation-container  flex just-cont-start align-start'>
                            <div className='reservation-form-container flex'>
                            <Reservation
                            guestCounter={guestCounter}
                            onReserveOrder= {onReserveOrder}
                            onPickedCheckInDate={onPickedCheckInDate}
                            onPickedCheckOutDate={onPickedCheckOutDate}
                            pickedCheckInDate={pickedCheckInDate}
                            pickedCheckOutDate={pickedCheckOutDate}
                            totalGuestNumber={totalGuestNumber}  />
                            
                            
                            </div>
                        </div>
                       {/* {<ReservationContainer 
                        onReserveOrder= {onReserveOrder}
                        onPickedCheckInDate={onPickedCheckInDate}
                        onPickedCheckOutDate={onPickedCheckOutDate}
                        pickedCheckInDate={pickedCheckInDate}
                        pickedCheckOutDate={pickedCheckOutDate}
                        totalGuestNumber={totalGuestNumber}  />} */}

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
