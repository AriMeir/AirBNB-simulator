import { useEffect } from "react";
import { UserCard } from "./UserCard";
import { StayCard } from "./StayCard";
import { utilService } from "../services/util.service";
import { OrderTheader } from "./OrderTheader";


export function OrderTable({ orders, onOrderByPriceDown, onOrderByPriceUp, onOrderByStatusUp ,onOrderByStatusDown ,onOrderByDateUp ,onOrderByDateDown, onApproveOrder,onRejectOrder }) {

    if (orders.length === 0) return <p>loading...</p>;

    const getStatusDot = (status) => {
        let color = "";
        switch (status) {
            case "pending":
                color = "rgb(255, 196, 0)";
                break;
            case "approved":
                color = "rgb(103, 194, 58)";
                break;
            case "canceled":
                color = "rgb(245, 108, 108)";
                break;
            case "rejected":
                color = "rgb(245, 108, 108)";
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
            <h1 className="table-page-header">Orders</h1>
            <h3 className="table-page-sec-header">Number of orders: {orders.length}</h3>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Guest</th>
                        <th><OrderTheader title={"Dates"} up={onOrderByDateUp} down={onOrderByDateDown}/></th>
                        <th>Stay</th>
                        <th><OrderTheader title={"Payment"} up={onOrderByPriceUp} down={onOrderByPriceDown}/></th>
                        <th><OrderTheader title={"Status"} up={onOrderByStatusUp} down={onOrderByStatusDown}/></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td><UserCard name={order.buyer.fullname} type={"Guest"} imgUrl={order.buyer.imgUrl}/></td>
                            <td>{utilService.convertDateFormat(order.startDate) + " - " + utilService.convertDateFormat(order.endDate)}</td>
                            <td><StayCard country={order.loc.country} city={order.loc.city} name={order.stay.name} imgUrl={order.stay.imgUrl}/></td>
                            <td>${order.totalPrice}.00</td>
                            <td>{getStatusDot(order.status)}</td>
                            <td><div className="buttons-order-div flex row space-between align-center"><button className="white-btn green-btn" onClick={() => onApproveOrder(order._id)}>Approve</button>
                             <button className="white-btn red-btn" onClick={() => onRejectOrder(order._id)}>Reject</button> </div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
