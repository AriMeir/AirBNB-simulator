import { DynamicHeader } from "../cmps/DynamicHeader";
import { Header } from "../cmps/Header";
import { TripIndex } from "../cmps/TripIndex";

export function TripsPage() {


    return (
        <>
            <DynamicHeader stayId={1} hostMode={false} showFilter={false} />

            <TripIndex/>
        </>
    );
}
