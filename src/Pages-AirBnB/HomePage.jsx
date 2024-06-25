import {Header} from '../cmps-AirBnB/Header'
import {Categories} from '../cmps-AirBnB/Categories'
import {StayIndex} from '../cmps-AirBnB/StayIndex'
import {Footer} from '../cmps-AirBnB/Footer'
export function HomePage() {
    return (
        <section>
            <Header/>
            <div className='home'>
            <Categories/>
            <StayIndex/>
            <Footer/>
            </div>

        </section >
        
    )
}

