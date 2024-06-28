import { loadTrips } from "../store-AirBnB/actions/trip.actions";
import { TripTable } from "./TripTable";
import { useEffect } from "react";
import { useSelector } from "react-redux";



export function TripIndex() {
    // consts
    const trips = useSelector(storeState => storeState.tripModule.trips)
    


    //useEffects
    useEffect(() => {  
        loadTrips()
        console.log(trips)
    }, [])


    return (
       <TripTable tripList={trips}/>
    )
}
