import {Header} from '../cmps/Header'
import { Outlet, useParams } from 'react-router'
import {Categories} from '../cmps/Categories'
import {StayIndex} from '../cmps/StayIndex'
import {Footer} from '../cmps/Footer'
import { useEffect, useState } from 'react'
import { DynamicHeader } from '../cmps/DynamicHeader'

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
