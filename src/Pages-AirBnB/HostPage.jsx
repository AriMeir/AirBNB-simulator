import { Outlet, useLocation } from "react-router";
import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader";
import { useNavigate } from "react-router";
import { LoginDisplay } from "../cmps-AirBnB/LoginDisplay"
import { useSelector } from 'react-redux';
import { login } from "../store-AirBnB/actions/user.actions";

export function HostPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const isSubPage = location.pathname.includes('/host/order') || location.pathname.includes('/host/dashboard');
    const user = useSelector(storeState => storeState.userModule.user)

    async function hostLogin() {
        try {
            await login('ari')

        } catch(e) {
            throw new Error ('There has been a problem logging in as Ari Host')
        }

    }
    async function guestLogin() {
        try {
            await login('einav')
        } catch(e) {
            throw new Error ('There has been a problem logging in as Einav Guest')
        }

    }

    return (
        <section>
            <DynamicHeader className="header-container" hostMode={true} stayId={1}/>
            <div className="host-content-page grid center">
                {!isSubPage && (
                    <>
                    {user?.type === 'host' ? (
                        <div>
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
                        </div>
                    ) : (
                        <div className="host-main-title flex column center align-center">
                            <h3>You must be a host to see management Page. Please log in.</h3>
                            {<LoginDisplay hostLogin={hostLogin} guestLogin={guestLogin}/>}
                        </div>
                    )}
                    </>
                )}

            </div>
            <Outlet />
        </section>
    );
}
