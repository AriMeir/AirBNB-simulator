import { Header } from "../cmps-AirBnB/Header";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function ConfirmationPage({ onConfirmTrip }) {
    const { stayId } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const checkInDate = searchParams.get('checkInDate');
    const checkOutDate = searchParams.get('checkOutDate');
    const guests = searchParams.get('guests');
    const price = searchParams.get('price');
    const fee = searchParams.get('fee');

    return (
        <section>
            <div className="confirmation-title flex row gap left align-center">
                <div onClick={() => { navigate(`/stay/${stayId}`) }}>{'<'}</div>
                <h1> Request to book </h1>
            </div>

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
                        <div className="rare-find-img">
                            <h5>diamond img</h5>
                        </div>
                    </div>

                    <div className="confirmation-trip-details border-bottom flex column align-left center">
                        <h2>Your trip</h2>
                        <div className="confirmation-dates flex space-between">
                            <h3>Dates</h3>
                            <h4>{checkInDate ? `${checkInDate} - ${checkOutDate}` : 'No dates selected'}</h4>
                        </div>
                        <div className="confirmation-guests flex space-between">
                            <h3>Guests</h3>
                            <h4>{guests ? guests : 'No guests selected'}</h4>
                        </div>
                        <button className="confirmation-confirm-button" onClick={() => onConfirmTrip(stayId, checkInDate, checkOutDate, guests, price, fee  )}>Confirm</button>
                    </div>
                </div>
                <div className="confirmation-page-column-two">
                    {/* Additional content can go here */}
                </div>
            </div>
        </section>
    );
}
