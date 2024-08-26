import { useEffect } from "react";
import { StayCard } from "./StayCard";
import { UserCard } from "./UserCard";
import { utilService } from "../services-AirBnB/util.service";
import { OrderTheader } from "./OrderTheader";









export function TripTable({ tripList, onOrderByPriceDown, onOrderByPriceUp, onOrderByStatusUp ,onOrderByStatusDown ,onOrderByDateUp ,onOrderByDateDown, onCancelOrder }) {
   
    

    if (tripList.length === 0) return <p>No trips available</p>;

    const getStatusDot = (status) => {
        let color = "";
        switch (status.toLowerCase()) {
            case "pending":
                color = "rgb(255, 196, 0)";
                break;
            case "complete":
                color = "rgb(0, 255, 0)";
                break;
            case "canceled":
                color = "rgb(255, 0, 0)";
                break;
            default:
                color = "gray";
        }
        return (
            <span>
                <span style={{ color, marginRight: "8px", fontSize: "1.2em"}}>
                    &#9679;
                </span> 
                {status}
            </span>
        );
    };

    return (
        <section className="secondary-layout">
            <h1>Welcome to your trips</h1>
            <h3>Number of trips: {tripList.length}</h3>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Stay</th>
                        <th>Host</th>
                        <th><OrderTheader title={"Dates"} up={onOrderByDateUp} down={onOrderByDateDown}/></th>
                        <th><OrderTheader title={"Total Price"} up={onOrderByPriceUp} down={onOrderByPriceDown}/></th>
                        <th><OrderTheader title={"Status"} up={onOrderByStatusUp} down={onOrderByStatusDown}/></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tripList.map((trip, index) => (
                        <tr key={index}>
                            <td><StayCard country={trip.loc.country} city={trip.loc.city} name={trip.stay.name}/></td>
                            <td><UserCard name={trip.host.hostName} type={"Host"} imgUrl={trip.host.imgUrl}/></td>
                            <td>{utilService.convertDateFormat(trip.startDate) + " - " + utilService.convertDateFormat(trip.endDate)}</td>
                            <td>${trip.totalPrice}.00</td>
                            <td>{getStatusDot(trip.status)}</td>
                            <td><div className="buttons-order-div flex row center align-center"><button className="white-btn" onClick={()=> {onCancelOrder(trip._id)}}>Cancel</button></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
