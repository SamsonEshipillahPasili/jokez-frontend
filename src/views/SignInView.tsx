import { Button, Spinner } from "flowbite-react";
import PlainNavigationBar from "./PlainNavigationBar";
import { Link } from "react-router-dom";
import { HiInformationCircle } from 'react-icons/hi';
import JokezAlert from "./JokezAlert";
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import AuthFormTextField from "./AuthFormTextField";
import SignInData from '../api/models/SignInData'
import { signIn } from "../api/auth-service";
import { useNavigate } from 'react-router-dom';
import { useAsyncLoader } from "./form-utils";

const initialData: SignInData = {
    username: '', password: ''
}

const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required')
        .min(5, 'Username should be 5 characters or more')
        .max(15, 'Username cannot exceed 15 characters'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password should be 8 characters or more')
        .max(15, 'Password cannot exceed 15 characters'),
});

function SignInView() {
    const {state, loader} = useAsyncLoader<string>();
    const navigate = useNavigate();

    function onSubmit(values: any) {
        loader(async () => {
            const token = await signIn({username: values.username, password: values.password});
            // todo:- use token
            // todo: hard-coded route?
            navigate('/my_jokes');
            return token;
        });
    }

    return (
        <>
            <PlainNavigationBar />
            <div className="w-full px-3 mt-6 md:px-0 md:w-96 md:mx-auto">
                <Formik
                initialValues={initialData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                    <Form className="flex flex-col gap-4">
                        {state.error && 
                        <JokezAlert
                            color='failure'
                            icon={HiInformationCircle}
                            title='Error'
                            description={state.error}
                        />}
                        <h2 className="text-3xl font-bold text-center">Sign In</h2>
                        <AuthFormTextField label='Enter your username' name='username' type='text' />
                        <AuthFormTextField label='Enter your password' name='password' type='password' />
                        <Button type="submit">
                            {state.loading && 
                            <div className="mr-3">
                                <Spinner size="sm" light={true} />
                            </div>
                            }
                            {state.loading ? <span>Signin In</span> : <span>Sign In</span>}
                        </Button>
                        <div>
                            <p>Don't have an account? <Link to='/sign_up'>Sign Up</Link> </p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default SignInView;