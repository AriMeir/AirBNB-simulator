import { useEffect } from "react";
import { TripCard } from "./TripCard";
import { HostCard } from "./HostCard";

export function TripTable({ tripList }) {
   
    useEffect(() => {
        console.log(tripList, "triplist in TripTable");
    }, [tripList]);

    if (tripList.length === 0) return <p>No trips available</p>;

    const getStatusDot = (status) => {
        let color = "";
        switch (status.toLowerCase()) {
            case "pending":
                color = "yellow";
                break;
            case "complete":
                color = "#32CD32";
                break;
            case "canceled":
                color = "red";
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
        <section className="trips">
            <h1>Welcome to your trips</h1>
            <h3>Number of trips: {tripList.length}</h3>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Stay</th>
                        <th>Host</th>
                        <th>Dates</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tripList.map((trip, index) => (
                        <tr key={index}>
                            <td><TripCard country={trip.loc.country} city={trip.loc.city} name={trip.stay.name}/></td>
                            <td><HostCard name={trip.host.hostName}/></td>
                            <td>{trip.startDate + " - " + trip.endDate}</td>
                            <td>${trip.totalPrice}.00</td>
                            <td>{getStatusDot(trip.status)}</td>
                            <td><button className="white-btn">Cancel</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
