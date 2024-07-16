import { useState } from "react";
import { MainGuestsFilter } from "./MainGuestFilter";
import { ReserveButton } from "./ReserveButton";
import { BasicRangeShortcuts } from "./BasicRangeShortcuts";
import { DatePickerReservationModal } from "./DatePickerReservationModal";



export function Reservation({guestCounter}) {
    const [showGuestCounter, setShowGuestCounter] = useState(false)
    const [showdatePickerModal, setShowdatePickerModal] = useState(false)

    function toggleShowDateModal(){
        setShowdatePickerModal(prev => !prev)  
    }
    return (
      <section className="order-container">
        <div className="order-form-header">
          <p><span className="cost">$150</span> / night</p>
          <p>4.38 <span className="reviews">(4 reviews)</span></p>
        </div>
  
        <div className="order-data">
          <div className="date-picker" >
            <div className="date-input"  onClick={toggleShowDateModal}>
              <label>CHECK IN</label>
              <input value="Tue Sep 07 2021"></input>
            </div>
            <div className="date-input"  onClick={toggleShowDateModal}>
              <label>CHECK OUT</label>
              <input value="Tue Sep 07 2021"></input>
            </div>
            {showdatePickerModal && <div className="date-picker-modal">
               <DatePickerReservationModal toggleShowDateModal={toggleShowDateModal}/>
            </div>}
           
            
          </div>
  
          <div className="guest-input" onClick={()=> {setShowGuestCounter(prev => !prev)}}>
            <label>GUESTS</label>
            <input value={guestCounter.totalGuestNumber}></input>
            <svg viewBox="0 0 320 512" width="100" title="angle-down">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
            {showGuestCounter && <div className="guests-counter-in-reserveation" >
                  <MainGuestsFilter guestCounter={guestCounter}/>

            </div>}
          </div>
        </div>
  
        <ReserveButton/>
        {true && <><div className="no-charge-yet flex center">
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
        </div></>}
        
      </section>
    );
  }
  