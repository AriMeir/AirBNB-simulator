import { BasicRangeShortcuts } from "./BasicRangeShortcuts";

export function DatePickerReservationModal({toggleShowDateModal,onPickedDate ,pickedCheckInDate, pickedCheckOutDate, clearDates}) {
    return (
        <>
            <div className="date-picker-res-modal-header">
                <h4>1 Night</h4>
                <h5>dates-dates</h5>
            </div>
            <BasicRangeShortcuts onPickedDate={onPickedDate} />
            <div className="order-data-in-date-picker-modal">
          <div className="date-picker-in-date-picker-modal" >
            <div className="date-input" >
              <label>CHECK IN</label>
              <p>{pickedCheckInDate? pickedCheckInDate: "Add date"}</p>
            </div>
            <div className="date-input">
              <label>CHECK OUT</label>
              <p>{pickedCheckOutDate? pickedCheckOutDate : "Add date"}</p>
            </div>
          </div>    
        </div>
        <div className="order-modal-btns">
            <button className="clear-dates-button inline-btn" onClick={clearDates}>Clear dates</button>
            <button
            className="clear-dates-button black-btn"
            onClick={
            toggleShowDateModal
            }
>
  Close
</button>

        </div>
        </>
    );
}
