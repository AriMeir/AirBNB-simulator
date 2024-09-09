
import { fetchSVG } from "../store-AirBnB/svg/SvgStore";

export function AmenitiesPopup({ onClose, amenityList }) {
  return (
    <div className="reviews-component flex column just-cont-start">
      <div>
        <button className="close-button-reviews-component x-btn" onClick={onClose}>X</button>
      </div>
      <h1>Amenities</h1>
      <div className="list-reviews-component flex column just-cont-start align-left">
      {amenityList.map((amenity) => (
          <li className="little-pad-box flex row left align-center" key={amenity}>
            <div>{fetchSVG(amenity)}</div>
            <span className='amenity-name'>{amenity}</span>
          </li>
        ))}    
      </div>
    </div>
  );
}
