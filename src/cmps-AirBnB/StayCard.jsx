export function StayCard({country, city, name}) {
    return (
        <div className="trip-card flex row left align-center">
            <div className="trip-img-container">
                <img src="https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg"></img>
            </div>
            <div className="trip-dest-info flex column center align-center">
                <h5>{country} - {city}</h5>
                <span className="place-name">{name}</span>
            </div>
        </div>

    )
}
