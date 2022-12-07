import { Button, Label, TextInput, Alert } from "flowbite-react";
import PlainNavigationBar from "./PlainNavigationBar";
import {Link} from "react-router-dom";
import { HiInformationCircle } from 'react-icons/hi';
import JokezAlert from "./JokezAlert";

function SignInView() {
    return (
        <>
        <PlainNavigationBar />
        <div className="w-full px-3 mt-6 md:px-0 md:w-96 md:mx-auto">
        <form className="flex flex-col gap-4">
            <JokezAlert
                color='failure'
                icon={HiInformationCircle}
                title='Error'
                description='There was an error'
            />
            <h2 className="text-3xl font-bold text-center">Sign In</h2>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="username"
                        value="Enter your username"
                    />
                </div>
                <TextInput
                    id="username"
                    type="text"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Enter your password"
                    />
                </div>
                <TextInput
                    id="password"
                    type="text"
                />
            </div>
            <Button type="button">
                <Link to="/">
                    Submit
                </Link>
            </Button>
            <div>
                <p>Don't have an account? <Link to='/sign_up'>Sign Up</Link> </p>
            </div>
        </form>
        </div>
       </>
    );
}

export default SignInView;