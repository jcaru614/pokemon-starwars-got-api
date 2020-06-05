import React from "react";
import Nav from 'react-bootstrap/Nav';

const Navbar = (props) => {

    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/"> Pokemon </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/starwars"> Starwars </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/got"> Game of Thrones </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Navbar;
