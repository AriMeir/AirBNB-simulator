import { useEffect } from "react";

export function TripTable({tripList}) {
   
    useEffect(() => {
        console.log(tripList, "triplist in TripTable")
    })
    if (tripList === 0) return 
    return (
        <section className="trips">
            <h1>Trips</h1>
            <h3>Number of trips: {tripList.length}</h3>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Host</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Booked</th>
                        <th>Total Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tripList.map((trip, index) => (
                        <tr key={index}>
                            <td>{trip.stay.name}</td>
                            <td>{trip.hostId}</td>
                            <td>{trip.startDate}</td>
                            <td>{trip.endDate}</td>
                            <td>{"7/10/2024"}</td>
                            <td>{trip.totalPrice}</td>
                            <td>{trip.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
