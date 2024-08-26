import { useEffect } from "react";
import { UserCard } from "./UserCard";
import { StayCard } from "./StayCard";
import { utilService } from "../services-AirBnB/util.service";


export function OrderTable({ orders }) {

    useEffect(() => {
        console.log(orders, "orders in OrderTable");
    }, [orders]);

    if (orders.length === 0) return <p>No orders available</p>;

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
                <span style={{ color, marginRight: "8px", fontSize: "1.2em" }}>
                    &#9679;
                </span> 
                {status}
            </span>
        );
    };

    return (
        <section className="orders-table">
            <h1>Welcome to your orders</h1>
            <h3>Number of orders: {orders.length}</h3>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Guest</th>
                        <th>Dates</th>
                        <th>Stay</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td><UserCard name={order.buyer.fullname} type={"Guest"} /></td>
                            <td>{utilService.convertDateFormat(order.startDate) + " - " + utilService.convertDateFormat(order.endDate)}</td>
                            <td><StayCard country={order.loc.country} city={order.loc.city} name={order.stay.name}/></td>
                            <td>${order.totalPrice}.00</td>
                            <td>{getStatusDot(order.status)}</td>
                            <td><div className="buttons-order-div flex row space-between align-center"><button className="white-btn green-btn">Accept</button> <button className="white-btn red-btn">Reject</button> </div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
