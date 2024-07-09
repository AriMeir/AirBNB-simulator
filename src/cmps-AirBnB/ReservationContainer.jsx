export function ReservationContainer({onReserveOrder, onPickedCheckInDate, onPickedCheckOutDate, pickedCheckInDate, pickedCheckOutDate, totalGuestNumber}) {
    return (
        <div className='reservation-container  flex just-cont-start align-start'>
        <div className='reservation-form-container flex'>
            <div className='reservation-form flex just-cont-start align-start column '>
                <div className="price-stars-reviews flex space-between align-center">
                    <div className="price flex row">
                        <h2>$104</h2>night
                    </div>
                    <div className="stars-reviews">
                        4.87•22 reviews
                    </div>
                </div>
                <div className="user-picker-container flex column ">
                    <div className="date-picker flex row">
                        <div className="check-in-picker flex align-left column" onClick={(e) => {e.stopPropagation()
                                                                                                onPickedCheckInDate()

                        }}>
                            <h4 >CHECK-IN</h4>
                            <h5>{pickedCheckInDate || 'pick check-in date'}</h5>
                            
                        </div>
                        <div className="check-out-picker flex align-left column" onClick={(e) => {e.stopPropagation()
                                                                                                    onPickedCheckOutDate()

                        }}>
                        <h4>CHECK-OUT</h4>
                        <h5>{pickedCheckOutDate || 'pick check-out date'}</h5>

                        </div>
                        
                    </div>
                    <div className="guest-picker flex align-left column">
                        <h4>GUESTS</h4>
                        <h5>{totalGuestNumber ||'number guest'}</h5>
                    </div>
                </div>
                <div className="reserve-button-container flex  center" onClick={onReserveOrder}>
                    <h1>reserve</h1>
                </div>
                <div className="no-charge-yet flex center">
                    <p> you won't be charged yet</p>
                </div>
                <div className="reservation-prices grid">
                    <h4 className="text-left">$104 x 150 nights</h4>
                    <h4 className="text-right">$15,600</h4>
                    <h4 className="text-left">Service fee</h4>
                    <h4 className="text-right">$1,680</h4>
                </div>
                <div className="total-price flex space-between">
                <h4 className="text-left">Total</h4>
                <h4 className="text-right">$15,600</h4>
                </div>

                
            </div>
        </div>
    </div>
    )
}

