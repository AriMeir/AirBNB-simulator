import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader";
import { Header } from "../cmps-AirBnB/Header";
import { TripIndex } from "../cmps-AirBnB/TripIndex";

export function TripsPage() {
   

    return (
        <>
            <DynamicHeader stayId={1} hostMode={false} showFilter={false} />
            
            <TripIndex/>
        </>
    );
}
