import type { JSX } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import type { TitleProps } from "./types";

function Header({title}: TitleProps):JSX.Element{
    return (<>
        <Navbar expand="lg" className="bg-dark bg-body-tertiary">
        <Container>
            <Navbar.Brand>{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/movies" end>Movie Catalog</Nav.Link>
                <Nav.Link as={NavLink} to="/user-form">User Form</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}

export default Header;