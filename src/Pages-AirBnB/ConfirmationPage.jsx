import { Header } from "../cmps-AirBnB/Header";
import { IoIosArrowBack } from "react-icons/io";
import { LoginDisplay } from "../cmps-AirBnB/LoginDisplay"
import { fetchSVG } from '../store-AirBnB/svg/SvgStore';

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ActionButton } from "../cmps-AirBnB/ActionButton";
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
export function ConfirmationPage({ onConfirmTrip, reviewMidScore }) {
    const { stayId } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const checkInDate = searchParams.get('checkInDate');
    const nights = searchParams.get('nights');
    const checkOutDate = searchParams.get('checkOutDate');
    const guests = searchParams.get('guests');
    const price = searchParams.get('price');
    const totalPrice = searchParams.get('total-price');
    const fee = searchParams.get('fee');

    const [user, setUser] = useState(false)
    const [confirmed, setConfirmed] = useState(false)

    async function confirmTrip() {
      try {
         await onConfirmTrip(stayId, checkInDate, checkOutDate, guests, price, fee)
         setConfirmed(true)

      }catch(e){
        console.log("Error has occured: ", e)
      }

    }

    return (
        <section>
            {!confirmed && <div className="confirmation-title flex row gap left align-center">
                <div className="back-button" onClick={() => { navigate(`/stay/${stayId}`) }}><IoIosArrowBack /></div>
                <h1> Request to book </h1>
            </div>}
            {confirmed && <div className="confirmation-title flex row gap left align-center">
                <div className="back-button" onClick={() => { navigate(`/stay/${stayId}`) }}><IoIosArrowBack /></div>
                <div className="success-img-container">
                <img className="success-img" src="/img/success.svg"/>
                </div>
                <h1> Reservation success! </h1>
            </div>}

            <div className="confirmation-page-main-content grid">
                <div className="confirmation-page-column-one">
                    <div className="rare-find-box flex space-between margin-box">
                        <div className="rare-find-text flex column">
                            <div className="rare-find-title">
                                <h4>This is a rare find</h4>
                            </div>
                            <div className="rare-find-sub-title">
                                <h5>Ari Meir's place is usually booked.</h5>
                            </div>
                        </div>
                        <div className="rare-find-img" onClick={() => setUser(1)}>
                            <img src="/img/dimond.svg"/>
                        </div>
                    </div>

                    <div className="confirmation-trip-details border-bottom flex column align-left center">
                        <h2 className="confirmation-small-title">Your trip</h2>
                        <div className="confirmation-dates flex space-between">
                            <h4>Dates</h4>
                            <h4>{checkInDate ? `${checkInDate} - ${checkOutDate}` : 'No dates selected'}</h4>
                        </div>
                        <div className="confirmation-guests flex space-between">
                            <h4>Guests</h4>
                            <h4>{guests ? guests + " Guests" : 'No guests selected'}</h4>
                        </div>
                        {(user && !confirmed) &&  <ActionButton buttonText={"Confirm"}  action={confirmTrip}/>}
                        {(user && confirmed) && 
                        <>
                        <h3>We are looking forward to hosting you!</h3>
                        <ActionButton buttonText={"Move to trips"}  action={() => navigate("/trips")}/>
                        </>}
                    </div>
                    {!user && <LoginDisplay/>}
                </div>

                <div className="confirmation-page-column-two">
                    <div className="summery-card">
                        {/* upper card */}
                        <div className="stay-detail-card flex row border-bottom">
                            <div className="stay-details-img">
                                <img src={stay.imgUrls[0]}></img>
                            </div>
                            <div className="stay-desc flex column space-around">
                                <div className="stay-desc-sum">
                                <h4 className="stay-type">Private {stay.type}</h4>
                                <h4 className="stay-name">{stay.name}</h4>
                                </div>
                                <div className="stay-desc-reviews">
                                    <span className="stay-desc-reviews-element-star" >{fetchSVG("star")}</span> 
                                    <span className="stay-desc-reviews-element-score">{reviewMidScore}</span> • {" "}
                                    <span className="stay-desc-reviews-element-reviews">({stay.reviews.length + " reviews"})</span>
                                </div>
                            </div>
                        </div>
                        {/* middle card */}
                        <div className="air-cover-middle-card border-bottom pad-box flex row">
                            <span className="lil-info">Your booking is protected by {""}</span> 
                            <div className='air-cover-img-card'>
                                <img src='/img/air-cover.webp'></img>
                            </div>
                        </div>
                        {/* bottom card */}
                        <div className="flex column left align-left pad-box border-bottom">
                            <h2>Price Details</h2>
                            <div className="bottom-card-details  flex column">
                                <div className="flex row space-between align-center">
                                    <h4 className="underline">${parseInt(price, 10)/parseInt(nights, 10)} x {nights} nights</h4>
                                    <p>$ {parseInt(price, 10)}</p>

                                </div>
                                <div className="flex row space-between align-center">
                                    <h4 className="underline">Service fee</h4>
                                    <p>$ {parseInt(fee, 10)}</p>
                                </div>

                            </div>
                        </div>
                        {/* summory card */}
                        <div className="flex row space-between align-center pad-top ">
                                    <h4 className="underline">Total (USD)</h4>
                                    <p>$ {parseInt(fee, 10) + parseInt(price, 10)}</p>
                                </div>



                    </div>
                </div>
            </div>
        </section>
    );
}
