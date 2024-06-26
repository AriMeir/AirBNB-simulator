import { Header } from "../cmps-AirBnB/Header";

export function TripsPage() {
    const tripsData = [
        {
            destination: "Paris, France",
            host: "John Doe",
            checkIn: "2024-07-01",
            checkOut: "2024-07-07",
            booked: "2024-01-15",
            totalPrice: "$1200",
            status: "Confirmed",
        },
        {
            destination: "New York, USA",
            host: "Jane Smith",
            checkIn: "2024-08-10",
            checkOut: "2024-08-15",
            booked: "2024-03-22",
            totalPrice: "$1500",
            status: "Pending",
        },
        {
            destination: "Tokyo, Japan",
            host: "Hiro Tanaka",
            checkIn: "2024-09-05",
            checkOut: "2024-09-12",
            booked: "2024-04-10",
            totalPrice: "$2000",
            status: "Confirmed",
        },
    ];

    return (
        <>
            <Header />
            <section className="trips">
                <h1>Trips</h1>
                <h3>Number of trips: {tripsData.length}</h3>
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
                        {tripsData.map((trip, index) => (
                            <tr key={index}>
                                <td>{trip.destination}</td>
                                <td>{trip.host}</td>
                                <td>{trip.checkIn}</td>
                                <td>{trip.checkOut}</td>
                                <td>{trip.booked}</td>
                                <td>{trip.totalPrice}</td>
                                <td>{trip.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
