import { DynamicHeader } from "../cmps-AirBnB/DynamicHeader"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginDisplay } from "../cmps-AirBnB/LoginDisplay";
import { ActionButton } from '../cmps-AirBnB/ActionButton'
import * as Yup from 'yup';
export function LoginPage() {

    

    return (
        <>
        <DynamicHeader className="header-container" />
        <section className="login-page">
            <LoginDisplay/>
        </section >
        </>
    )
}

