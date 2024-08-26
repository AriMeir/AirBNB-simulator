import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginDisplay } from "../cmps-AirBnB/LoginDisplay";
import { ActionButton } from '../cmps-AirBnB/ActionButton'
import { authService } from "../services-AirBnB/auth.service";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
export function LoginPage() {


    const navigate = useNavigate()


    async function hostLogin() {
        try {
            await authService.login('ari')
            navigate('/stay')
        } catch(e) {
            throw new Error ('There has been a problem logging in as Ari Host')
        }

    }
    async function guestLogin() {
        try {
            await authService.login('einav')
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

