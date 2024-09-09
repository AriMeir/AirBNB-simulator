import { Header } from "../cmps/Header";
import { IoIosArrowBack } from "react-icons/io";
import { LoginDisplay } from "../cmps/LoginDisplay"
import { fetchSVG } from '../store-AirBnB/svg/SvgStore';
import { login } from "../store-AirBnB/actions/user.actions";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActionButton } from "../cmps/ActionButton";
import { authService } from "../services/auth.service";
import { useSelector } from "react-redux";

export function ConfirmationPage({ onConfirmTrip, reviewMidScore, stay }) {
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

    const user = useSelector(storeState => storeState.userModule.user)
    const [confirmed, setConfirmed] = useState(false)

    async function confirmTrip() {
      try {
         await onConfirmTrip(stayId, checkInDate, checkOutDate, guests, price, fee)
         setConfirmed(true)

      }catch(e){
        console.log("Error has occured: ", e)
      }

    }

    async function hostLogin() {
      try {
          await login('ari')

      } catch(e) {
          throw new Error ('There has been a problem logging in as Ari Host')
      }

  }
  async function guestLogin() {
      try {
          await login('einav')
      } catch(e) {
          throw new Error ('There has been a problem logging in as Einav Guest')
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
                    {!user && <LoginDisplay hostLogin={hostLogin} guestLogin={guestLogin}/>}
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
                        {/* summary card */}
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
