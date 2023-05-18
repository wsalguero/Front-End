import React from 'react'
import "../../assets/resources/css/navarStyles.css"


import SekkerHoteles from '../Sekkers/SekkerHoteles'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navar_aHotel = () => {
  return (
    <Navbar className="navarColor" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-font texto-borde " href="#">Traveling</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav.Link href="#action1">Login</Nav.Link>
          <NavDropdown title="Menú" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3"></NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Reservaciones
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">
              Habitaciones
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Usuarios
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Cerrar Sesión
            </NavDropdown.Item>

          </NavDropdown>

          <Nav.Link href="#" >
            Eventos y Ofertas
          </Nav.Link>


          <SekkerHoteles />
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default Navar_aHotel