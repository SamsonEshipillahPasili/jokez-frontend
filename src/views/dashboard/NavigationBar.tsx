import {Navbar, Button} from "flowbite-react";
import AddJokeModal from "./AddJokeModal";
import {useState} from "react";
import {Link} from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

function NavigationBar({...props}) {
    const [showAddJoke, setShowAddJoke] = useState<boolean>(false);

    function closeModal() {
        setShowAddJoke(false);
    }

    return (
        <>
            <div {...props}>
                <Navbar fluid={true} rounded={true}>
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Jokez"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jokez</span>
                    </Navbar.Brand>

                    <div className="flex md:order-2">
                        <Button onClick={() => setShowAddJoke(true)}>Add Joke</Button>
                        <Navbar.Toggle/>
                    </div>

                    <Navbar.Collapse>
                        <CustomNavLink to='/my_jokes' title='My Jokes' />
                        <CustomNavLink to='/all_jokes' title='All Jokes' />
                        <CustomNavLink to='/sign_in' title='Sign Out' />
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <AddJokeModal show={showAddJoke} closeModal={closeModal} />
        </>
    );
}


export default NavigationBar;