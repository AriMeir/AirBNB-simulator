import { Header } from "../cmps-AirBnB/Header";
import { StayIndex } from "../cmps-AirBnB/StayIndex";
import {Footer} from '../cmps-AirBnB/Footer'

export function WishListPage() {
    return (
        <section className='main-content'>
            <Header className="header-container"/>
            <div className="wishlist">Wishlists</div>
            <div className="stay-list-wishlist">
            <StayIndex isWishPage={true} />
            </div>
            {/* <div className="footer-wishlist"> */}
            <Footer/>
            {/* </div> */}
        </section >
    );
}
