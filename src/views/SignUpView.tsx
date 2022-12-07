import { Button, Label, TextInput } from "flowbite-react";
import PlainNavigationBar from "./PlainNavigationBar";
import {Link} from "react-router-dom";

function SignUpView() {
    return (
        <>
        <PlainNavigationBar />
        <div className="w-full px-3 mt-6 md:px-0 md:w-96 md:mx-auto">
        <form className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-center">Sign Up</h2>
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
                        htmlFor="fullname"
                        value="Enter your full name"
                    />
                </div>
                <TextInput
                    id="fullname"
                    type="text"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Enter your password"
                    />
                </div>
                <TextInput
                    id="password1"
                    type="password"
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Confirm your password"
                    />
                </div>
                <TextInput
                    id="password2"
                    type="text"
                />
            </div>
            <Button type="submit">
                Submit
            </Button>
            <div>
                <p>Already have an account? <Link to='/sign_in'>Sign In</Link></p>
            </div>
        </form>
        </div>
        </>
    );
}

export default SignUpView;