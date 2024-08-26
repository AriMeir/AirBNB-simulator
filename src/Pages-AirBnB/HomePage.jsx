import {Header} from '../cmps-AirBnB/Header'
import { Outlet, useParams } from 'react-router'
import {Categories} from '../cmps-AirBnB/Categories'
import {StayIndex} from '../cmps-AirBnB/StayIndex'
import {Footer} from '../cmps-AirBnB/Footer'
import { useEffect, useState } from 'react'
import { DynamicHeader } from '../cmps-AirBnB/DynamicHeader'

export function HomePage() {
    const {stayId} = useParams()
    const [showCategories, setShowCategories] = useState(stayId)

    return (
        <section className='main-content'>
            <DynamicHeader className="header-container" stayId={stayId} showFilter={true} shrinked={true}/>
            {!stayId && <Categories className="categories"/>}
            {!stayId &&<StayIndex/>}
            {!stayId &&<Footer/>}
            <Outlet />
        </section >
    )
}
