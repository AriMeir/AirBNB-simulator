import { OrderTable } from "./OrderTable";
import { loadTrips } from "../store-AirBnB/actions/trip.actions";
import { useEffect } from "react";
import { approveTrip, rejectTrip } from "../store-AirBnB/actions/trip.actions";
import { useSelector } from "react-redux";

export function OrderIndex() {

    // consts
    const orders = useSelector(storeState => storeState.tripModule.trips)


    function onOrderByPriceUp() {
        const filterby = { filterType:"order" , by:"price" ,order:"up"}
        loadTrips(filterby)
    }
    function onOrderByPriceDown() {
        const filterby = { filterType:"order" , by:"price" ,order:"down"}
        loadTrips(filterby)
    }
    function onOrderByStatusUp() {
        const filterby = { filterType:"order" , by:"status" ,order:"up"}
        loadTrips(filterby)
    }
    function onOrderByStatusDown() {
        const filterby = { filterType:"order" , by:"status" ,order:"down"}
        loadTrips(filterby)
    }
    function onOrderByDateUp() {
        const filterby = { filterType:"order" , by:"date" ,order:"up"}
        loadTrips(filterby)
    }
    function onOrderByDateDown() {
        const filterby = { filterType:"order" , by:"date" ,order:"down"}
        loadTrips(filterby)
    }
    function onApproveOrder(orderId) {
        try{
            approveTrip(orderId)
        } catch (e) {
            console.log("Error canceling trip", e)
        }
        
    }
    function onRejectOrder(orderId) {
        try{
            rejectTrip(orderId)
        } catch (e) {
            console.log("Error canceling trip", e)
        }
        
    }

    //useEffects
    useEffect(() => {  
        loadTrips()
    }, [])


    return (
        <section className="secondary-layout right-pad">
            
            <OrderTable orders={orders}
                onOrderByPriceDown={onOrderByPriceDown}
                onOrderByPriceUp={onOrderByPriceUp}
                onOrderByStatusUp={onOrderByStatusUp}
                onOrderByStatusDown={onOrderByStatusDown}
                onOrderByDateUp={onOrderByDateUp}
                onOrderByDateDown={onOrderByDateDown}
                onApproveOrder={onApproveOrder}
                onRejectOrder={onRejectOrder} />
        </section >
    )
}

