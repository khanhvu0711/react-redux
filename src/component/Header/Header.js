import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Mipha App
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/user">
                            Users
                        </NavLink>
                        <NavLink className="nav-link" to="/admin">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Log in
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Log out
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                profile
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
