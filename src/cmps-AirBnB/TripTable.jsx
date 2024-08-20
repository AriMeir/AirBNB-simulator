import { useEffect } from "react";
import { TripCard } from "./TripCard";

export function TripTable({tripList}) {
   
    useEffect(() => {
        console.log(tripList, "triplist in TripTable")
    })
    if (tripList === 0) return 
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
                            <td><TripCard/></td>
                            <td>{trip.host.hostName}</td>
                            <td>{trip.startDate + "-" + trip.endDate}</td>
                            <td>{trip.totalPrice}</td>
                            <td>{trip.status}</td>
                            <td><button></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
