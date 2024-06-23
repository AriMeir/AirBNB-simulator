import React from 'react'
import { Routes, Route } from 'react-router'
/* import { StayDetailsPage } from './Pages-AirBnB/StayDetailsPage.jsx'
import { ConfirmationPage } from './Pages-AirBnB/ConfirmationPage.jsx'
import { HostPage, LoginPage } from './Pages-AirBnB/LoginPage.jsx'
import { TripsPage } from './Pages-AirBnB/TripsPage.jsx'
import { HostPage } from './Pages-AirBnB/HostPage.jsx'
import { WishListPage } from './Pages-AirBnB/WishListPage.jsx'
import { HomePage1 } from './Pages-AirBnB/HomePage1.jsx'
import { AboutPage } from './Pages-AirBnB/AboutPage.jsx'
import { InboxPage } from './Pages-AirBnB/InboxPage.jsx' */
import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { CarIndex } from './pages/CarIndex.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { CarDetails } from './pages/CarDetails'
import { UserDetails } from './pages/UserDetails'
import { BoardDetails } from './pages/BoardDetails'
import { TaskDetails } from './pages/TaskDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'


export function RootCmp() {
    return (
        <div>
            <AppHeader />
            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="car" element={<CarIndex />} />
                    <Route path="car/:carId" element={<CarDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="board" element={<BoardIndex />} />
                    <Route path="board/:boardId" element={<BoardDetails />} >
                        <Route path="group/:groupId/task/:taskId" element={<TaskDetails />} />
                    </Route>
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="chat" element={<ChatApp />} />
                    <Route path="admin" element={<AdminIndex />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}
/* export function RootCmp_AirBnB() {
    return (
        <div> 
            <main>
                <Routes>
                    <Route path="/stay?" element={<HomePage1 />} >
                        <Route path="stay/:stayid" element={<StayDetailsPage/>} >
                            <Route path="stay/:stayid/:order" element={<ConfirmationPage/>} />
                        </Route>  
                    </Route>
                    <Route path="/trips" element={<TripsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/wish" element={<WishListPage />}/>
                    <Route path="/inbox" element={<InboxPage />}/>
                    <Route path="/host" element={<HostPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                </Routes>
            </main>
        </div>
    )
} */


