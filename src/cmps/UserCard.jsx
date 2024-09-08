import { useEffect } from "react"

export function UserCard({ name, type, imgUrl }) {
    return (
        <div className="host-card flex row left align-center">
            <div className="host-img-container">
                <img src={imgUrl}></img>
            </div>
            <div className="host-info flex column center">
                <h5>{name}</h5>
                {/* <span className="host-label">{type}</span> */}
            </div>
        </div>
    )
}
