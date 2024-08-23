import { OrderTable } from "./OrderTable";
import { loadTrips } from "../store-AirBnB/actions/trip.actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function OrderIndex() {

    // consts
    const orders = useSelector(storeState => storeState.tripModule.trips)

    //useEffects
    useEffect(() => {  
        loadTrips()
        console.log(orders)
    }, [])


    return (
        <section className="secondary-layout right-pad">
            
            <OrderTable orders={orders} />
        </section >
    )
}

