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
            <Navbar expand="lg">
  <Container>
  <Navbar.Brand href="#home">
    <img
        src={image}
        width="90"
        
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
    />
  </Navbar.Brand>
      <Nav className="ms-auto menu">
        <Link to="/home">Home</Link>
        <Link to="/doctor">Doctors</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/appointment">Appointment</Link>
        {/* <Button>Appointment</Button> */}

         {user?.email ? <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                            <Button onClick={logOut} variant="danger" className="mx-3 rounded-pill px-4">Log Out</Button>
                        </Navbar.Text>
                            :
                            <div className="d-flex">
                                <Button onClick={handleLogIn} variant="info" className="mx-3 rounded-pill px-4">Login</Button>
                                <Button onClick={handleSignUp} variant="info" className="rounded-pill px-4">Sign up</Button>
                            </div>
                        }
      </Nav>

  </Container>
</Navbar>
        </div>
    );
};

export default MenuBar;