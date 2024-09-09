import React from 'react'
import { Routes, Route } from 'react-router'
import { StayDetailsPage } from './pages/StayDetailsPage.jsx'
import { ConfirmationPage } from './pages/ConfirmationPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { TripsPage } from './pages/TripsPage.jsx'
import { HostPage } from './pages/HostPage.jsx'
import { OrderIndex } from './cmps/OrderIndex.jsx'
import { DashBoard } from './cmps/Dashboard.jsx'
import { WishListPage } from './pages/WishListPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { InboxPage } from './pages/InboxPage.jsx'
import { Test } from './pages/Test.jsx'


export function RootCmp() {
    return (
        <Routes>
            <Route path="/stay?" element={<HomePage />} >
                <Route path="/stay/:stayId" element={<StayDetailsPage />}/>
            </Route>
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/wish" element={<WishListPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/host" element={<HostPage />} >
                <Route path="/host/order" element={<OrderIndex />} />
                <Route path="/host/dashboard" element={<DashBoard />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/test" element={<Test/>} />
        </Routes>
    );
}
