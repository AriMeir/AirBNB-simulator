
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ConfirmationPage } from './ConfirmationPage';
import { AmenitiesPopup } from '../cmps/AmenitiesPopup';
import { useState, useEffect } from 'react';
import { loadStay } from '../store-AirBnB/actions/stay.actions';
import { useSelector } from 'react-redux';
import { GuestCounter } from '../cmps/GuestCounter';
import { ReviewScoreBar } from '../cmps/ReviewScoreBar';
import { ReviewPopUp } from '../cmps/ReviewPopUp';
import { MapComponent } from '../cmps/MapComponent';
import { addTrip } from '../store-AirBnB/actions/trip.actions';
import { fetchSVG } from '../store-AirBnB/svg/SvgStore';
import { BasicRangeShortcuts } from '../cmps/BasicRangeShortcuts';
import { Reservation } from '../cmps/Reservation';
import { AmenitiesPreviewGridList } from '../cmps/AmenitiesPreviewGridList';
import { ReviewsPreviewGridList } from '../cmps/ReviewsPreviewGridList';
import { ActionButton } from '../cmps/ActionButton';
import { authService } from '../services/auth.service';
import { ActionButtonWhite } from '../cmps/ActionButtonWhite';
const reviews = [
  {
    "id": "r1",
    "txt": "Amazing place! Super clean and great location. The host was very accommodating and provided us with all the necessary information for our stay. The neighborhood is quiet and safe, with easy access to public transportation. Highly recommended for anyone looking for a comfortable and hassle-free stay.",
    "rate": 5,
    "by": {
      "id": "u101",
      "fullname": "Klodet",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/10.jpg"
    }
  },
  {
    "id": "r2",
    "txt": "The hosts were very welcoming. They provided us with a map of the area and recommended some great local restaurants. The place itself was exactly as described, clean and cozy. Would definitely stay again if we're in the area.",
    "rate": 4,
    "by": {
      "id": "u102",
      "fullname": "Chris",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg"
    }
  },
  {
    "id": "r3",
    "txt": "Good value for money. The apartment is close to public transport, making it easy to get around the city. The host was very responsive and answered all our questions quickly. The only downside was the slightly small bathroom, but it wasn't a major issue.",
    "rate": 4,
    "by": {
      "id": "u103",
      "fullname": "Yoav",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/45.jpg"
    }
  },
  {
    "id": "r4",
    "txt": "The apartment was a bit small but very cozy. It had everything we needed for a short stay, including a fully equipped kitchen. The location is fantastic, with several shops and cafes within walking distance. The host was also very friendly and made sure we had everything we needed.",
    "rate": 3,
    "by": {
      "id": "u104",
      "fullname": "Kim",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/64.jpg"
    }
  },
  {
    "id": "r5",
    "txt": "Fantastic view from the balcony. The apartment is well-decorated and has a very homey feel. We spent a lot of time just relaxing and enjoying the view. The bed was comfortable, and the place was spotless. Highly recommend this place to anyone looking for a relaxing getaway.",
    "rate": 5,
    "by": {
      "id": "u105",
      "fullname": "Binh",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/44.jpg"
    }
  },
  {
    "id": "r6",
    "txt": "Nice place, but a bit noisy at night. The apartment is located in a busy area, so there was some street noise, especially on the weekends. However, the apartment itself was very comfortable and clean. The host was helpful and provided earplugs, which was a nice touch.",
    "rate": 3,
    "by": {
      "id": "u106",
      "fullname": "Duyan",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/32.jpg"
    }
  },
  {
    "id": "r7",
    "txt": "The kitchen was fully equipped and very clean. We were able to cook our meals without any issues. The location is great, with several grocery stores and markets nearby. The apartment was also very quiet, which was a big plus.",
    "rate": 4,
    "by": {
      "id": "u107",
      "fullname": "Kimber",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/4.jpg"
    }
  },
  {
    "id": "r8",
    "txt": "Beautiful decor and very comfortable bed. The apartment felt like a home away from home. The host was very thoughtful and even left us a bottle of wine to welcome us. We had a great time staying here and would definitely come back.",
    "rate": 5,
    "by": {
      "id": "u108",
      "fullname": "Jess",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/23.jpg"
    }
  },
  {
    "id": "r9",
    "txt": "The wifi was a bit slow, but everything else was great. The apartment was clean, well-furnished, and in a convenient location. The host was very responsive and did their best to address the wifi issue during our stay.",
    "rate": 4,
    "by": {
      "id": "u109",
      "fullname": "Irena",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/35.jpg"
    }
  },
  {
    "id": "r10",
    "txt": "Perfect location, right in the city center. We could walk to all the major attractions. The apartment was clean and well-maintained. The host provided us with all the necessary information for our stay and was very friendly.",
    "rate": 5,
    "by": {
      "id": "u110",
      "fullname": "Quantin",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/28.jpg"
    }
  },
  {
    "id": "r11",
    "txt": "Hosts were very responsive and helpful. They provided us with detailed information about the apartment and the surrounding area. The place itself was very comfortable and clean. We had a great stay and would definitely recommend it.",
    "rate": 5,
    "by": {
      "id": "u111",
      "fullname": "Matthew",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/41.jpg"
    }
  },
  {
    "id": "r12",
    "txt": "Great place for a weekend getaway. The apartment is cozy and well-furnished, with a lovely balcony where we could enjoy our morning coffee. The host was very accommodating and even allowed us to check out late. Highly recommend!",
    "rate": 4,
    "by": {
      "id": "u112",
      "fullname": "Yossi",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/11.jpg"
    }
  },
  {
    "id": "r13",
    "txt": "The place was exactly as described. We were very pleased with our stay. The apartment was clean, comfortable, and in a great location. The host was very helpful and provided us with all the information we needed. We would definitely stay here again.",
    "rate": 5,
    "by": {
      "id": "u113",
      "fullname": "Tal",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/12.jpg"
    }
  },
  {
    "id": "r14",
    "txt": "Comfortable stay, but could use better lighting. The apartment was a bit dim, especially in the evenings. Other than that, everything was great. The host was friendly and provided us with extra blankets when we requested them.",
    "rate": 3,
    "by": {
      "id": "u114",
      "fullname": "Meir",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/13.jpg"
    }
  },
  {
    "id": "r15",
    "txt": "Wonderful experience! The hosts were amazing. They went out of their way to make sure we were comfortable and had everything we needed. The apartment was clean, stylish, and in a great location. We would definitely stay here again.",
    "rate": 5,
    "by": {
      "id": "u115",
      "fullname": "James",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/14.jpg"
    }
  },
  {
    "id": "r16",
    "txt": "Good place, but a bit far from main attractions. We had to take public transport to get to the city center, which was a bit inconvenient. However, the apartment itself was very nice and well-maintained. The host was also very friendly.",
    "rate": 3,
    "by": {
      "id": "u116",
      "fullname": "Jean",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/15.jpg"
    }
  },
  {
    "id": "r17",
    "txt": "Spotlessly clean and very stylish. The apartment was beautifully decorated and had everything we needed for a comfortable stay. The host was very accommodating and even provided us with a list of local restaurants and cafes. We had a wonderful time here.",
    "rate": 5,
    "by": {
      "id": "u117",
      "fullname": "Klodet",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/11.jpg"
    }
  },
  {
    "id": "r18",
    "txt": "Good for the price, but could be better maintained. The apartment was a bit dated and could use some upgrades. However, it was clean and comfortable, and the host was very responsive. We enjoyed our stay overall.",
    "rate": 3,
    "by": {
      "id": "u118",
      "fullname": "Kim",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/12.jpg"
    }
  },
  {
    "id": "r19",
    "txt": "The host provided great local recommendations. We tried several of the restaurants they suggested and were not disappointed. The apartment was comfortable and well-located. We had a great time exploring the area.",
    "rate": 4,
    "by": {
      "id": "u119",
      "fullname": "Hadar",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/13.jpg"
    }
  },
  {
    "id": "r20",
    "txt": "Lovely place with a beautiful garden. We spent a lot of time outside enjoying the peaceful surroundings. The apartment was clean, comfortable, and well-equipped. The host was very welcoming and made us feel right at home.",
    "rate": 5,
    "by": {
      "id": "u120",
      "fullname": "Kaodia",
      "imgUrl": "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/14.jpg"
    }
  }

]

export const oldStay = {
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
      fullname: "Ari Meir",
      imgUrl: "https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/68.jpg",
    },
    loc: {
      country: "Portugal",
      countryCode: "PT",
      city: "Lisbon",
      address: "17 Kombo st",
      lat: 38.736946,
      lng: -9.142685
    },
    reviews: reviews,
    likedByUsers: ['mini-user']
  }




export function StayDetailsPage() {
    // format 13/2/2024
    const {stayId} = useParams()
    const stay = useSelector(storeState => storeState.stayModule.stay)
    const [searchParams, setSearchParams] = useSearchParams();
    const [pickedCheckInDate, setPickedCheckInDate] = useState(searchParams.get('checkIn')|| '')
    const [pickedCheckOutDate, setPickedCheckOutDate] = useState(searchParams.get('checkOut')|| '')


    // format jul-12-2024
    const [pickedCheckInDateText, setPickedCheckInDateText] = useState('')
    const [pickedCheckOutDateText, setPickedCheckOutDateText] = useState('')

    const user = useSelector(storeState => storeState.userModule.user)
    const [reviewMidScore, setReviewMidScore] = useState(0)
    const [nights, setNights]= useState(0)
    const [price, setPrice] = useState(0)
    const [fee, setFee] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showReviews, setShowReviews] = useState(false)
    const [showAmenities, setShowAmenities] = useState(false)

    const [showGuestsSection, setShowGuestsSection] = useState(false)
    const [adultCounter,setAdultCounter] = useState(1)
    const [childrenCounter,setChildrenCounter] = useState(0)
    const [infantCounter,setInfantCounter] = useState(0)
    const [petCounter,setPetCounter] = useState(0)
    const [totalGuestNumber, setTotalGuestNumber] = useState(0)
    const [showHeader, setShowHeader] = useState(false);


    const buttonText = (pickedCheckInDate && pickedCheckOutDate && totalGuestNumber && totalPrice) ? "Reserve" : "Check Availablity"
    const navigate = useNavigate();

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
      if (pickedCheckInDate && pickedCheckOutDate && totalGuestNumber > 0) {
          const [checkInDay, checkInMonth, checkInYear] = pickedCheckInDate.split('/');
          const [checkOutDay, checkOutMonth, checkOutYear] = pickedCheckOutDate.split('/');

          const checkInDate = new Date(`${checkInMonth}/${checkInDay}/${checkInYear}`);
          const checkOutDate = new Date(`${checkOutMonth}/${checkOutDay}/${checkOutYear}`);

          const nightCounter = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

          setNights(nightCounter);

          const calculatedPrice = Math.round(nightCounter * stay?.price);
          setPrice(calculatedPrice);

          const calculatedFee = Math.round(calculatedPrice * 0.03);
          setFee(calculatedFee);

          setTotalPrice(calculatedPrice + calculatedFee);
      } else {
          setNights(0);
          setPrice(0);
          setFee(0);
          setTotalPrice(0);
      }
  }, [pickedCheckInDate, pickedCheckOutDate, totalGuestNumber]);



    useEffect(() => {
      loadCurrentStay(stayId)
    })


    useEffect(() => {
        setTotalGuestNumber(adultCounter + childrenCounter + infantCounter + petCounter);
    }, [adultCounter, childrenCounter, infantCounter, petCounter]);
    useEffect(() => {
      const calculateAverageRating = (reviews) => {
          const totalRates = reviews.reduce((sum, review) => sum + review.rate, 0);
          return (totalRates / reviews?.length).toFixed(1); // Format to 1 decimal place
      }
      if (stay) {
        setReviewMidScore(calculateAverageRating(stay.reviews));
      }

  }, [stay?.reviews]);


    async function loadCurrentStay(stayId){
      await loadStay(stayId)
    }





    function onShowReviews(){
        setShowReviews(true)
    }
    function onCloseReviews(){
        setShowReviews(false)
    }
    function onShowAmenities(){
        setShowAmenities(true)
    }
    function onCloseAmenities(){
      setShowAmenities(false)
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
              imgUrl:stay.host.imgUrl
            },
            buyer: {
            _id: user._id,
            fullname: user.fullname,
            imgUrl: user.imgUrl
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
            name: stay.name,
            price: price,
            imgUrl: stay.imgUrls[0]
            },
            loc: {
              country: stay.loc.country,
              city: stay.loc.city
            },
            msgs: [],
            status: "Pending" // Approved, Rejected
        }
        await addTrip(newTrip)


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


    if (!stay) return <div className="loading">Loading...</div>
    return (
        <>
            {hasSearchParams ? (
                <section className='confirmation-page flex-column-center-left'>
                <ConfirmationPage onConfirmTrip={onConfirmTrip} reviewMidScore={reviewMidScore} stay={stay} />
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
                          <span>{fetchSVG("star")} {reviewMidScore} • {stay?.reviews?.length} reviews  </span>
                        </div>
                        <div className='header-reserve-button-container flex align-center'>
                        <ActionButton buttonText={buttonText} action={onReserveOrder}/>
                        </div>
                      </div>

                    </div>

                  </div>
                    <h1 className='stay-title'>{stay.name}</h1>

                    <div className='img-container' id="photos">
                        <div className='img'><img src={stay?.imgUrls[0]}/></div>
                        <div className='img'><img src={stay?.imgUrls[1]}/></div>
                        <div className='img'><img src={stay?.imgUrls[2]}/></div>
                        <div className='img'><img src={stay?.imgUrls[3]}/></div>
                        <div className='img'><img src={stay?.imgUrls[4]}/></div>
                    </div>
                    <div id="targetDiv"></div> {/*for the second header*/ }
                    <div className='mid-section grid border-bottom'>
                        <div className='details'>
                            <div className='host-details border-bottom pad-box'>
                                <div className='flex-row-center space-between'>
                                    <div className='host-details-text flex-column-left just-cont-left'>
                                        <h2>{stay.name + " " + stay.type + " by " + stay.host.fullname}</h2>
                                        <h6>{"Superhost 10 years hosting"}</h6>
                                        <span className='lil-info'>2 guests • 1 bedroom • 2 beds • 1 bath</span>
                                    </div>
                                    <div className='host-detail-img'><img src={stay.host.imgUrl}/></div>
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
                                        <h3>Great check-in experience</h3>
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
                                <h2>About this place</h2>
                                <p className='air-cover-txt'>
                                   {stay.summary}
                                </p>
                            </div>
                            <div className='stay-amenities border-bottom pad-box' id="amenities">
                                <h2>What this place offers</h2>
                                <AmenitiesPreviewGridList amenityList={stay.amenities}/>
                                <div>
                                <button className='white-btn' onClick={onShowAmenities}>Show all {stay?.amenities?.length} amenities</button>
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
                            reviewMidScore={reviewMidScore}
                            clearDates={clearDates}
                            reviewNumber={stay?.reviews?.length}
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
                        <h2><span>{fetchSVG("star")}</span> {reviewMidScore} • {stay?.reviews?.length} reviews</h2>
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
                    <button className='white-btn' onClick={onShowReviews}>Show all {stay?.reviews?.length} reviews</button>
                    </div>
                    </div>
                    {showReviews && <ReviewPopUp onClose={onCloseReviews} reviewList={stay.reviews}/>}
                    {showAmenities && <AmenitiesPopup onClose={onCloseAmenities} amenityList={stay.amenities}/>}
                    <div id="location"></div>
                    <MapComponent country={stay.loc.country} city={stay.loc.city} lat={stay.loc.lat} lng={stay.loc.lng} />
                    <div className='pad-box'>
                        <button className='white-btn'>Contact host</button>
                    </div>
                </section>

            )}
        </>
    );
}
