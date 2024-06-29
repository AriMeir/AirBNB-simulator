import {Header} from '../cmps-AirBnB/Header'
import { Outlet, useParams } from 'react-router'
import {Categories} from '../cmps-AirBnB/Categories'
import {StayIndex} from '../cmps-AirBnB/StayIndex'
import {Footer} from '../cmps-AirBnB/Footer'
import { useEffect, useState } from 'react'
export function HomePage() {
    const {stayId} = useParams()
    const [showCategories, setShowCategories] = useState(stayId)

    return (
        <section className='main-content'>
            <Header/>
            <div className='home'>
            {!stayId && <Categories/>}
            {!stayId &&<StayIndex/>}
            <Outlet />
            <Footer/>
            </div>
        </section >

    )
}
