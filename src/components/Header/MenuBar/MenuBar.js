
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import logo from '../../../images/header/logo.jpg';

const MenuBar = () => {
    return (
        <div>
            <Navbar expand="lg">
  <Container>
  <Navbar.Brand href="#home">
    <img
        src={logo}
        width="130"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
    />
  </Navbar.Brand>
      <Nav className="ms-auto menu">
        <Link to="/home">Home</Link>
        <Link to="/doctor">Doctors</Link>
        <Link to="/service">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Button>Appointment</Button>
      </Nav>
  </Container>
</Navbar>
        </div>
    );
};

export default MenuBar;