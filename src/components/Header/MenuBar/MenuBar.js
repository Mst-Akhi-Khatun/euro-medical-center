import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import image from '../../../images/logo-1.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const MenuBar = () => {
  const { user, logOut } = useAuth();
  
  const history = useHistory();

    const handleLogIn = () => {
        history.push("/login")
    }
    const handleSignUp = () => {
        history.push("/register")
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src={image}
                        width="90"
        
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto menu d-flex align-items-center">
                        <Nav.Item>
                            <Link to="/home">Home</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/appointment">Appointment</Link>
                        </Nav.Item>

                        {user?.email ? <Nav.Item className="mt-1 text-center">
                            
                            <span className="text-center">Signed in as:<a href="#login">{user?.displayName}</a></span>                                
                            
                            <Button onClick={logOut} variant="info" className="mx-3 mt-1 rounded-pill px-4">Log Out</Button>
                                
                            
                        </Nav.Item>
                            :
                            <div className="d-flex mt-1">
                                <Button onClick={handleLogIn} variant="info" className="mx-3 rounded-pill px-4">Login</Button>
                                <Button onClick={handleSignUp} variant="info" className="rounded-pill px-4">Sign up</Button>
                            </div>
                        }
                    </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;