import { Header } from "../cmps-AirBnB/Header";
import { StayIndex } from "../cmps-AirBnB/StayIndex";

export function WishListPage() {
    return (
        <section>
            <Header />
            <StayIndex isWishPage={true} />
        </section>
    );
}
