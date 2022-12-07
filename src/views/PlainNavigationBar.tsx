import {Navbar} from "flowbite-react";

function PlainNavigationBar() {

    return (
        <>
            <div className="border-b">
                <Navbar fluid={true} rounded={true}>
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Jokez"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jokez</span>
                    </Navbar.Brand>
                </Navbar>
            </div>
        </>
    );
}

export default PlainNavigationBar;
