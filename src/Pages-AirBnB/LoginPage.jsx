import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginDisplay } from "../cmps-AirBnB/LoginDisplay";
import { ActionButton } from '../cmps-AirBnB/ActionButton'
import { login } from "../store-AirBnB/actions/user.actions";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
export function LoginPage() {


    const navigate = useNavigate()


    async function hostLogin() {
        try {
            await login('ari')
            navigate('/stay')
        } catch(e) {
            throw new Error ('There has been a problem logging in as Ari Host')
        }

    }
    async function guestLogin() {
        try {
            await login('einav')
            navigate('/stay')
        } catch(e) {
            throw new Error ('There has been a problem logging in as Einav Guest')
        }

    }

    return (
        <>
        <DynamicHeader className="header-container" />
        <section className="login-page">
            <LoginDisplay hostLogin={hostLogin} guestLogin={guestLogin}/>
        </section >
        </>
    )
}

