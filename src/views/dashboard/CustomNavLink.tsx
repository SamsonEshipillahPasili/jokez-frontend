import {Link, NavLink, useMatch, useResolvedPath} from "react-router-dom";
import {Navbar} from "flowbite-react";

function CustomNavLink({to, title}: any) {
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <Link to={to}>
            <Navbar.Link active={!!match}>
                {title}
            </Navbar.Link>
        </Link>
    );
}

export default CustomNavLink;
