import React from 'react'
import { Routes, Route } from 'react-router'
import { StayDetailsPage } from './Pages-AirBnB/StayDetailsPage.jsx'
import { ConfirmationPage } from './Pages-AirBnB/ConfirmationPage.jsx'
import { LoginPage } from './Pages-AirBnB/LoginPage.jsx'
import { TripsPage } from './Pages-AirBnB/TripsPage.jsx'
import { HostPage } from './Pages-AirBnB/HostPage.jsx'
import { WishListPage } from './Pages-AirBnB/WishListPage.jsx'
import { HomePage } from './Pages-AirBnB/HomePage.jsx'
import { AboutPage } from './Pages-AirBnB/AboutPage.jsx'
import { InboxPage } from './Pages-AirBnB/InboxPage.jsx'




export function RootCmp() {
    return (
        <div>
            <main>
                <Routes>
                    <Route path="/stay" element={<HomePage />} >
                        <Route path="/stay/:stayId" element={<StayDetailsPage />}/>             
                    </Route>
                    <Route path="/stay/:stayId/:orderId" element={<ConfirmationPage/>}/>
                    <Route path="/trips" element={<TripsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/wish" element={<WishListPage />} />
                    <Route path="/inbox" element={<InboxPage />} />
                    <Route path="/host" element={<HostPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </main>
        </div>
    );
}


