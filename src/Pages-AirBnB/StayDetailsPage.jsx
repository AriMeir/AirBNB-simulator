
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
import { AmenitiesPreviewGridList } from '../cmps-AirBnB/AmenitiesPreviewGridList';
import { ReviewsPreviewGridList } from '../cmps-AirBnB/ReviewsPreviewGridList';
import { ActionButton } from '../cmps-AirBnB/ActionButton';
const reviews = [
    {
      "id": "r1",
      "txt": "Amazing place! Super clean and great location.",
      "rate": 5,
      "by": {
        "id": "u101",
        "fullname": "user1",
        "imgUrl": "/img/img1.jpg"
      }
    },
    {
      "id": "r2",
      "txt": "The hosts were very welcoming. Would definitely stay again.",
      "rate": 4,
      "by": {
        "id": "u102",
        "fullname": "user2",
        "imgUrl": "/img/img2.jpg"
      }
    },
    {
      "id": "r3",
      "txt": "Good value for money. Close to public transport.",
      "rate": 4,
      "by": {
        "id": "u103",
        "fullname": "user3",
        "imgUrl": "/img/img3.jpg"
      }
    },
    {
      "id": "r4",
      "txt": "The apartment was a bit small but very cozy.",
      "rate": 3,
      "by": {
        "id": "u104",
        "fullname": "user4",
        "imgUrl": "/img/img4.jpg"
      }
    },
    {
      "id": "r5",
      "txt": "Fantastic view from the balcony. Highly recommend!",
      "rate": 5,
      "by": {
        "id": "u105",
        "fullname": "user5",
        "imgUrl": "/img/img5.jpg"
      }
    },
    {
      "id": "r6",
      "txt": "Nice place, but a bit noisy at night.",
      "rate": 3,
      "by": {
        "id": "u106",
        "fullname": "user6",
        "imgUrl": "/img/img6.jpg"
      }
    },
    {
      "id": "r7",
      "txt": "The kitchen was fully equipped and very clean.",
      "rate": 4,
      "by": {
        "id": "u107",
        "fullname": "user7",
        "imgUrl": "/img/img7.jpg"
      }
    },
    {
      "id": "r8",
      "txt": "Beautiful decor and very comfortable bed.",
      "rate": 5,
      "by": {
        "id": "u108",
        "fullname": "user8",
        "imgUrl": "/img/img8.jpg"
      }
    },
    {
      "id": "r9",
      "txt": "The wifi was a bit slow, but everything else was great.",
      "rate": 4,
      "by": {
        "id": "u109",
        "fullname": "user9",
        "imgUrl": "/img/img9.jpg"
      }
    },
    {
      "id": "r10",
      "txt": "Perfect location, right in the city center.",
      "rate": 5,
      "by": {
        "id": "u110",
        "fullname": "user10",
        "imgUrl": "/img/img10.jpg"
      }
    },
    {
      "id": "r11",
      "txt": "Hosts were very responsive and helpful.",
      "rate": 5,
      "by": {
        "id": "u111",
        "fullname": "user11",
        "imgUrl": "/img/img11.jpg"
      }
    },
    {
      "id": "r12",
      "txt": "Great place for a weekend getaway.",
      "rate": 4,
      "by": {
        "id": "u112",
        "fullname": "user12",
        "imgUrl": "/img/img12.jpg"
      }
    },
    {
      "id": "r13",
      "txt": "The place was exactly as described. Very pleased.",
      "rate": 5,
      "by": {
        "id": "u113",
        "fullname": "user13",
        "imgUrl": "/img/img13.jpg"
      }
    },
    {
      "id": "r14",
      "txt": "Comfortable stay, but could use better lighting.",
      "rate": 3,
      "by": {
        "id": "u114",
        "fullname": "user14",
        "imgUrl": "/img/img14.jpg"
      }
    },
    {
      "id": "r15",
      "txt": "Wonderful experience! The hosts were amazing.",
      "rate": 5,
      "by": {
        "id": "u115",
        "fullname": "user15",
        "imgUrl": "/img/img15.jpg"
      }
    },
    {
      "id": "r16",
      "txt": "Good place, but a bit far from main attractions.",
      "rate": 3,
      "by": {
        "id": "u116",
        "fullname": "user16",
        "imgUrl": "/img/img16.jpg"
      }
    },
    {
      "id": "r17",
      "txt": "Spotlessly clean and very stylish.",
      "rate": 5,
      "by": {
        "id": "u117",
        "fullname": "user17",
        "imgUrl": "/img/img17.jpg"
      }
    },
    {
      "id": "r18",
      "txt": "Good for the price, but could be better maintained.",
      "rate": 3,
      "by": {
        "id": "u118",
        "fullname": "user18",
        "imgUrl": "/img/img18.jpg"
      }
    },
    {
      "id": "r19",
      "txt": "The host provided great local recommendations.",
      "rate": 4,
      "by": {
        "id": "u119",
        "fullname": "user19",
        "imgUrl": "/img/img19.jpg"
      }
    },
    {
      "id": "r20",
      "txt": "Lovely place with a beautiful garden.",
      "rate": 5,
      "by": {
        "id": "u120",
        "fullname": "user20",
        "imgUrl": "/img/img20.jpg"
      }
    }
  ]
export const stay = {
    _id: "s101",
    name: "Luxury Urban Loft",
    type: "House",
    imgUrls: ["https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg", "https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436827/znh7gqzbwb4wm6bdziy7.jpg","https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436281/doubvhbpwjfx81yfzpxq.jpg","https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg", "https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436827/znh7gqzbwb4wm6bdziy7.jpg"],
    price: 325,
    summary: "Luxury Urban Loft - This chic loft in a trendy neighborhood boasts high ceilings, industrial decor, and a rooftop terrace with cityscape views.",
    capacity: 8,
    amenities: [
      "Shampoo",
      "Wifi",
      "Kitchen",
      "Bathtub",
      "Conditioner",
      "Hangers",
      "Iron",
      "Refrigerator",
      "Microwave",
      "Mini fridge"
    ],
    labels: [
      "Bed & breakfasts","Luxe","Top of the world"
    ],
    host: {
      id: "u101",
      fullname: "Laura Martinez",
      imgUrl: "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      address: "17 Kombo st",
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: reviews,
    likedByUsers: ['mini-user']
  }




export function StayDetailsPage() {
    // format 13/2/2024
    const [pickedCheckInDate, setPickedCheckInDate] = useState('')
    const [pickedCheckOutDate, setPickedCheckOutDate] = useState('')

    // format jul-12-2024
    const [pickedCheckInDateText, setPickedCheckInDateText] = useState('')
    const [pickedCheckOutDateText, setPickedCheckOutDateText] = useState('')


    const [reviewMidScore, setReviewMidScore] = useState(0)
    const [nights, setNights]= useState(0)
    const [price, setPrice] = useState(0)
    const [fee, setFee] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showReviews, setShowReviews] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [showGuestsSection, setShowGuestsSection] = useState(false)
    const [adultCounter,setAdultCounter] = useState(0)
    const [childrenCounter,setChildrenCounter] = useState(0)
    const [infantCounter,setInfantCounter] = useState(0)
    const [petCounter,setPetCounter] = useState(0)
    const [totalGuestNumber, setTotalGuestNumber] = useState(0)
    const [showHeader, setShowHeader] = useState(false);

    const buttonText = (pickedCheckInDate && pickedCheckOutDate && totalGuestNumber && totalPrice) ? "Reserve" : "Check Availablity"
    const navigate = useNavigate();
    useEffect (() => {
      console.log(buttonText)
    },[])
    // for the Second Header
    useEffect(() => {
      const targetElement = document.getElementById('targetDiv'); // Replace with your target div's ID
      const handleScroll = () => {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= targetPosition) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])


    useEffect(() => {
        setTotalGuestNumber(adultCounter + childrenCounter + infantCounter + petCounter);
    }, [adultCounter, childrenCounter, infantCounter, petCounter]);
    useEffect(() => {
        const calculateAverageRating = (reviews) => {
            const totalRates = reviews.reduce((sum, review) => sum + review.rate, 0);
            return totalRates / reviews.length;
        }
        setReviewMidScore(calculateAverageRating(stay.reviews))
    },[stay.reviews])



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
                params.set('nights',nights)
                params.set('total-price', totalPrice)
                params.set('guests', totalGuestNumber);
                return params;
            });
        }
    }
    async function onConfirmTrip(stayId, checkInDate, checkOutDate, guests, price, fee ) {
                try {
                const newTrip =
        {
            host: {
              hostId: "u102",
              hostName: stay.host.fullname,
              hostImgUrl:""
            },
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
            loc: {
              country: stay.loc.country,
              city: stay.loc.city
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




    function onPickedDate(date) {
        const formatDate = (date) => {
          return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(date);
        };
        const checkInDate = new Date(date[0]);
        const checkOutDate = new Date(date[1]);
        setPickedCheckInDateText(formatDate(checkInDate));
        setPickedCheckOutDateText(formatDate(checkOutDate));
      
        setPickedCheckInDate(date[0].format('DD/MM/YYYY'));
        setPickedCheckOutDate(date[1].format('DD/MM/YYYY'));
        // nights
        const nightCounter = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        // costs
        setNights(nightCounter);
        const price = Math.round(nightCounter * stay.price);
        setPrice(price);
        const fee = Math.round(price * 0.03);
        setFee(fee);
        setTotalPrice(price + fee);
    }
    function clearDates() {
        setPickedCheckInDateText('');
        setPickedCheckOutDateText('');
        setPickedCheckInDate('');
        setPickedCheckOutDate('');
        setNights(0)
        setPrice(0)
        setFee(0)
        setTotalPrice(0)
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
                <ConfirmationPage onConfirmTrip={onConfirmTrip} reviewMidScore={reviewMidScore} />
                </section>
            ) : (
                <section className='stay-details flex-column-center-left'>
                  <div className={`second-header-container border-bottom fixed ${showHeader ? 'show' : 'hide'}`}>
                    <div className='second-header flex space-between'>
                      <div className='anchor-links flex align-center'>
                      <a className='anchor-link' href="#photos">Photos</a>
                      <a className='anchor-link' href="#amenities">Amenities</a>
                      <a className='anchor-link' href="#reviews">Reviews</a>
                      <a className='anchor-link' href="#location">Location</a>
                      </div>
                      <div className='book-it flex '>
                        <div className='book-it-details  flex-column-center-left  '>
                          <h4>{stay.price}$ night</h4>
                          <span>{fetchSVG("star")} {reviewMidScore} • {stay.reviews.length} reviews  </span>
                        </div>
                        <div className='header-reserve-button-container flex align-center'>
                        <ActionButton buttonText={buttonText} action={onReserveOrder}/>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                    <h1 className='stay-title'>{stay.name}</h1>
                    
                    <div className='img-container' id="photos">
                        <div className='img'><img src={stay.imgUrls[0]}/></div>
                        <div className='img'><img src={stay.imgUrls[1]}/></div>
                        <div className='img'><img src={stay.imgUrls[2]}/></div>
                        <div className='img'><img src={stay.imgUrls[3]}/></div>
                        <div className='img'><img src={stay.imgUrls[4]}/></div>
                    </div>
                    <div id="targetDiv"></div> {/*for the second header*/ }
                    <div className='mid-section grid border-bottom'>
                        <div className='details'>
                            <div className='host-details border-bottom pad-box'>
                                <div className='flex-row-center space-between'>
                                    <div className='host-details-text flex-column-left just-cont-left'>
                                        <h2>{stay.host.fullname}</h2>
                                        <h6>{"Superhost 10 years hosting"}</h6>
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
                                    <img src='/img/air-cover.webp'></img>
                                </div>
                                <p className='air-cover-txt'>
                                    Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                                </p>
                            </div>
                            <div className='stay-summory-spanish flex column center align-left border-bottom pad-box'>
                                <h3>About this place</h3>
                                <p>
                                   {stay.summary}
                                </p>
                            </div>
                            <div className='stay-amenities border-bottom pad-box' id="amenities">
                                <h3>What this place offers</h3>
                                <AmenitiesPreviewGridList amenityList={stay.amenities}/>
                                <div>
                                <button className='white-btn' onClick={onShowReviews}>Show all 15 amenities</button>
                                </div>
                                
                            </div>
                            <div className='stay-calender  border-bottom pad-box'>
                                <div className='date-picker-header'>
                                    <h2>{!pickedCheckInDate? `Pick your dates` : `${nights} nights` } </h2>
                                    {pickedCheckInDateText && pickedCheckOutDateText && (<h6 className='foggy'>{`${pickedCheckInDateText} - ${pickedCheckOutDateText}`}</h6>)}
                                    
                                </div>
                                <div className='calender-wrapper'>
                                   <BasicRangeShortcuts onPickedDate={onPickedDate}  />
                                </div>
                                <div className='date-picker-buttons flex row align-center space-between'>
                                    <button className='inline-btn' onClick={toggleGuestsSection}>Select guests</button>
                                    <button className='inline-btn' onClick={clearDates}>Clear dates</button>
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
                            buttonText={buttonText}
                            clearDates={clearDates}
                            reviewNumber={stay.reviews.length}
                            pickedCheckInDate={pickedCheckInDate}
                            pickedCheckOutDate={pickedCheckOutDate}
                            totalPrice={totalPrice}
                            fee={fee}
                            singlePrice={stay.price}
                            price={price}
                            nights={nights}
                            guestCounter={guestCounter}
                            onReserveOrder = {onReserveOrder}
                            onPickedDate={onPickedDate}
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






                    <div className='reviews pad-box flex column border-bottom' id="reviews">
                        <h2><span>{fetchSVG("star")}</span> {reviewMidScore} • {stay.reviews.length} reviews</h2>
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
                        <ReviewsPreviewGridList reviewList={stay.reviews}/>

                      
                    <div>
                    <button className='white-btn' onClick={onShowReviews}>Show all {stay.reviews.length} reviews</button>
                    </div>
                    </div>
                    {showReviews && <ReviewPopUp onClose={onCloseReviews} reviewList={stay.reviews}/>}
                    <div id="location"></div>
                    <MapComponent />
                    <div className='pad-box'>
                        <button className='white-btn'>Contact host</button>
                    </div>
                </section>

            )}
        </>
    );
}
