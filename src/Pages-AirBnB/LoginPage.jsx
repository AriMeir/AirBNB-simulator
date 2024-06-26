import { Header } from "../cmps-AirBnB/Header"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export function LoginPage() {

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      });


    return (
        <>
        <Header/>
        <section>
            
            <div className="login-container border">
                <div className="semi-title flex-row-center center">
                <h1>Log in</h1>
                </div>
                <div className="form-container flex-row-center center">
                <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" name="username" />
                                    <ErrorMessage name="username" component="div" />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" />
                                </div>
                                <div>
                                    <button type="submit" disabled={isSubmitting}>
                                        Log In
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    </div>
                        <div className="demo-signup-buttons flex-column-center center">
                        <div className="demo-login-button">
                            <button className="normal-button">Demo Login</button>
                        </div>
                        <div className="sign-up-button">
                            <button className="normal-button">Sign Up</button>
                        </div>
                    </div>

                

            </div>
        </section >
        </>
    )
}

