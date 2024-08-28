import { IoSearch } from "react-icons/io5";
import { utilService } from "../services-AirBnB/util.service";
export function SmallFilter({onLittleFilterClick, location, checkIn, checkOut, guests}) {
    return (
        <div className='filter-container flex row flex-start align-center' >
            <button className="filter-button" onClick={onLittleFilterClick}>{location || 'Anywhere'}</button>
            <span className="filter-splitter"></span>
            <button className="filter-button" onClick={onLittleFilterClick}>{(checkIn && checkOut)? (utilService.convertDateFormat(checkIn) + " - " + utilService.convertDateFormat(checkOut)) :  ' Any week'}</button>
            <span className="filter-splitter"></span>
            <button className="filter-button filter-add-guests" onClick={onLittleFilterClick}>{guests? (guests + " guests") :  'Add guests'}</button>
            <button className="mini-search-button"><IoSearch />
            </button>
        </div>
    )
}
