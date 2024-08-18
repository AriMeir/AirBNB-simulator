import { fetchSVG } from "../store-AirBnB/svg/SvgStore";
export function AmenitiesPreviewGridList({ amenityList }) {
    return (
      <ul className='amenities-container'>
        {amenityList.slice(0, 10).map((amenity) => (
          <li key={amenity}>
            <div>{fetchSVG(amenity)}</div>
            <span className='amenity-name'>{amenity}</span>
          </li>
        ))}
      </ul>
    );
  }
  