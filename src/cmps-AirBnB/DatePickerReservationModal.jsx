import { BasicRangeShortcuts } from "./BasicRangeShortcuts";

export function DatePickerReservationModal({toggleShowDateModal}) {
    return (
        <>
            <div className="date-picker-res-modal-header">
                <h4>1 Night</h4>
                <h5>dates-dates</h5>
            </div>
            <BasicRangeShortcuts />
            <div className="order-data-in-date-picker-modal">
          <div className="date-picker-in-date-picker-modal" >
            <div className="date-input" >
              <label>CHECK IN</label>
              <input value="Tue Sep 07 2021"></input>
            </div>
            <div className="date-input">
              <label>CHECK OUT</label>
              <input value="Tue Sep 07 2021"></input>
            </div>
          </div>    
        </div>
        <div className="order-modal-btns">
            <button className="clear-dates-button inline-btn">Clear dates</button>
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
