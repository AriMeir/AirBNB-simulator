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
        <div className="wrapper">
            <Header className="header-container"/>
            <div className='main-content'>
                {/* <div className='home'> */}
                    {!stayId && <Categories className="categories"/>}
                    {!stayId &&<StayIndex/>}
                    <Outlet />
                {/* </div> */}
            </div>
            <Footer/>
        </div>
    )
}
