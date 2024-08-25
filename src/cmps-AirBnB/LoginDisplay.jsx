import { Header } from "../cmps-AirBnB/Header";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ActionButton } from '../cmps-AirBnB/ActionButton';
import * as Yup from 'yup';

export function LoginDisplay() {

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <div className="login-container">

            <div className="form-wrapper">
                <div className="login-form-title border-bottom">
                <h1 className="form-title">Log in or Sign up</h1>
                </div>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting, values }) => (
                        <Form className="login-form">
                            <div className="form-group">

                                <Field type="text" name="username" className="form-control" placeholder="Username"  />
                                <ErrorMessage name="username" component="div" className="error-message" />
                            </div>
                            <div className="form-group">

                                <Field type="password" name="password" className="form-control" placeholder="Password"  />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            <div className="form-group">
                                <ActionButton
                                    buttonText={"Log In"}
                                    action={() => console.log('Username:', values.username, 'Password:', values.password)}
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="demo-login-buttons flex row space-between">
                    <div className="demo-login-button">
                        <ActionButton buttonText={"Log In as Einav Guest"} />
                    </div>
                    <div className="demo-login-button">
                        <ActionButton buttonText={"Log In As Ari Host "} />
                    </div>
                </div>
            </div>
        </div>
    );
}
