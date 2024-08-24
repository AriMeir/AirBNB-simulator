import { IoSearch } from "react-icons/io5";
export function SmallFilter({onLittleFilterClick}) {
    return (
        <div className='filter-container flex row flex-start align-center' >
            <button className="filter-button" onClick={onLittleFilterClick}>Anywhere</button>
            <span className="filter-splitter"></span>
            <button className="filter-button" onClick={onLittleFilterClick}>Any week</button>
            <span className="filter-splitter"></span>
            <button className="filter-button filter-add-guests" onClick={onLittleFilterClick}>Add guests</button>
            <button className="mini-search-button"><IoSearch />
            </button>
        </div>
    )
}
