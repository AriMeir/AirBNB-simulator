export function HostCard({ name }) {
    return (
        <div className="host-card flex row left align-center">
            <div className="host-img-container">
                <img src="https://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg"></img>
            </div>
            <div className="host-info flex column center align-center">
                <h5>{name}</h5>
                <span className="host-label">Host</span>
            </div>
        </div>
    )
}