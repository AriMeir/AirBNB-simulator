import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader";

export function HostPage() {
    return (
        <section>
            <DynamicHeader className="header-container" hostMode={true} stayId={1}/>
            
            
        </section >
    )
}

