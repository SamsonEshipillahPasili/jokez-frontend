import { Button, Spinner } from "flowbite-react";
import PlainNavigationBar from "./PlainNavigationBar";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import AuthFormTextField from "./AuthFormTextField";
import { useAsyncLoader } from "./form-utils";
import { signUp } from "../api/auth-service";

interface SignUpData {
    username: string
    fullname: string
    password1: string
    password2: string
}

const initialData: SignUpData = {
    username: '', fullname: '', password1: '', password2: ''
}

const validationSchema = Yup.object({
    username: Yup.string()
        .min(5, 'Username cannot be less than 5 characters')
        .max(10, 'Username cannot be more than 10 characters')
        .required('Username is required'),
    fullname: Yup.string()
        .required('Fullname is required')
        .min(2, 'Fullname should be 2 characters or more')
        .max(255, 'Fullname cannot exceed 255 characters'),
    password1: Yup.string()
        .required('Password is required')
        .min(8, 'Password should be 8 characters or more')
        .max(15, 'Password cannot exceed 15 characters'),
    password2: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('password1')], 'Passwords do not match')
});


function SignUpView() {
    const {state, loader} = useAsyncLoader<null>();
    const navigate = useNavigate();

    function onSubmit(values: any) {
        loader(async () => {
            await signUp(values);
            navigate('/sign_in');
            return null;
        });
    }

    return (
        <>
            <PlainNavigationBar />
            <div className="w-full px-3 mt-6 md:px-0 md:w-96 md:mx-auto">
                <Formik
                    initialValues={initialData}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    >
                    <Form className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
                        <AuthFormTextField name='username' type='text' label='Enter your username' />
                        <AuthFormTextField name='fullname' type='text' label='Enter your fullname' />
                        <AuthFormTextField name='password1' type='password' label='Enter your password' />
                        <AuthFormTextField name='password2' type='password' label='Enter your password again' />
                        <Button type="submit">
                            {state.loading && <div className="mr-3">
                                <Spinner size="sm" />
                            </div>
                            }
                            {state.loading ? <span>Loading ...</span>: <span>Submit</span>}
                        </Button>
                        <div>
                            <p>Already have an account? <Link to='/sign_in'>Sign In</Link></p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default SignUpView;