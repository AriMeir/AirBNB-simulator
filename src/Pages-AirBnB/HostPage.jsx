import { Outlet, useLocation } from "react-router";
import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader";
import { useNavigate } from "react-router";

export function HostPage() {
    const navigate = useNavigate();
    const location = useLocation();


    const isSubPage = location.pathname.includes('/host/order') || location.pathname.includes('/host/dashboard');

    return (
        <section>
            <DynamicHeader className="header-container" hostMode={true} stayId={1}/>
            <div className="host-content-page grid center">
                {!isSubPage && (
                    <>
                        <div className="host-main-title flex column center align-center">
                            <h1 className="table-page-header">Host Management Page</h1>
                            <h2 className="table-page-sec-header">What would you like to watch?</h2>
                        </div>
                        <div className="pad-box flex row space-between align-center">
                            <button className="white-btn host-btn" onClick={() => { navigate('/host/order') }}>
                                My Orders
                            </button>
                            <button className="white-btn host-btn" onClick={() => { navigate('/host/dashboard') }}>
                                Dashboard
                            </button>
                        </div>
                    </>
                )}

            </div>
            <Outlet />
        </section>
    );
}
