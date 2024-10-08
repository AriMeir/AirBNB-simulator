import { Header } from "../cmps/Header";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ActionButton } from '../cmps/ActionButton';
import { ActionButtonWhite } from '../cmps/ActionButtonWhite';
import * as Yup from 'yup';
import { authService } from "../services/auth.service";

export function LoginDisplay({hostLogin, guestLogin}) {

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <div className="login-container">

            <div className="form-wrapper">
                <div className="login-form-title border-bottom">
                <h1 className="form-title">Log in</h1>
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
                <div>
                    <div className="login-or-divider">or</div>
                    <div class="login-or-line"><hr></hr></div>
                </div>
                <div className="flex row space-between">
                    <div>
                        <ActionButtonWhite buttonText={"Log In As Einav Guest"} action={guestLogin}/>
                    </div>
                    <div>
                        <ActionButtonWhite buttonText={"Log In As Ari Host "} action={hostLogin} />
                    </div>
                </div>
            </div>
        </div>
    );
}
