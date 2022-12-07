import {Footer} from "flowbite-react";

function JokezFooter({...props}) {
    return (
        <Footer container={true} {...props}>
            <Footer.Copyright
                href="#"
                by="Jokez"
                year={2022}
            />
            <Footer.LinkGroup>
                <Footer.Link href="#">
                    About
                </Footer.Link>
                <Footer.Link href="#">
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                    Licensing
                </Footer.Link>
                <Footer.Link href="#">
                    Contact
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}

export default JokezFooter;