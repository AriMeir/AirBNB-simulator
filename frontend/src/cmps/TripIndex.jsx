
import { TripTable } from "./TripTable";
import { loadTrips, updateTrip } from "../store-AirBnB/actions/trip.actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";



export function TripIndex() {
    // consts
    const trips = useSelector(storeState => storeState.tripModule.trips)

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
    function onCancelOrder(orderId) {
        try{
            const tripStatus = {
                _id:orderId,
                status:"canceled"
            }
            updateTrip(tripStatus)
        } catch (e) {
            console.log("Error canceling trip", e)
        }
        
    }


    //useEffects
    useEffect(() => {  
        loadTrips()
        
    }, [])


    return (
       <TripTable tripList={trips}
                onOrderByPriceDown={onOrderByPriceDown}
                onOrderByPriceUp={onOrderByPriceUp}
                onOrderByStatusUp={onOrderByStatusUp}
                onOrderByStatusDown={onOrderByStatusDown}
                onOrderByDateUp={onOrderByDateUp}
                onOrderByDateDown={onOrderByDateDown}
                onCancelOrder={onCancelOrder}/>
    )
}
