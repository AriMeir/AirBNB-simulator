export function StayCard({country, city, name, imgUrl}) {
    return (
        <div className="trip-card flex row left align-center">
            <div className="trip-img-container">
                <img src={imgUrl}></img>
            </div>
            <div className="trip-dest-info flex column center">
                <h5>{country} - {city}</h5>
                <span className="place-name">{name}</span>
            </div>
        </div>

    )
}
