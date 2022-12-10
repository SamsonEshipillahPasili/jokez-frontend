import { Button, Label, TextInput, Alert } from "flowbite-react";
import PlainNavigationBar from "./PlainNavigationBar";
import { Link } from "react-router-dom";
import { HiInformationCircle } from 'react-icons/hi';
import JokezAlert from "./JokezAlert";
// import {useQueryClient} from "@tanstack/react-query";
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import AuthFormTextField from "./AuthFormTextField";

interface SignInData {
    username: string
    password: string
}

const initialData: SignInData = {
    username: '', password: ''
}

const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required')
        .min(5, 'Username should be 5 characters or more')
        .max(10, 'Username cannot exceed 10 characters'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password should be 8 characters or more')
        .max(15, 'Password cannot exceed 15 characters'),
});

function SignInView() {

    function onSubmit(values: any, {setSubmitting}: any) {
        setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
        }, 3000);
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
                        <JokezAlert
                            color='failure'
                            icon={HiInformationCircle}
                            title='Error'
                            description='There was an error'
                        />
                        <h2 className="text-3xl font-bold text-center">Sign In</h2>
                        <AuthFormTextField label='Enter your username' name='username' type='text' />
                        <AuthFormTextField label='Enter your password' name='password' type='password' />
                        <Button type="submit">
                            Submit
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