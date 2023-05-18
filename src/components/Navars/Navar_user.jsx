import React from 'react'

import "../../assets/resources/css/navarStyles.css"

import Seeker from '../Sekkers/Sekker'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from "react-router-dom";



const Navar_user = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    //console.log('vamonos al login');
    navigate('/login');
  }

  const handleAcount = () => {
    //console.log('vamonos al login');
    navigate('/acount');
  }

  const handleFavorits = () => {
    //console.log('vamonos al login');
    navigate('/favorits');
  }

  const handleHome = () => {
    //console.log('vamonos al login');
    navigate('/home');
  }
  const handleEvents = () => {
    //console.log('vamonos al login');
    navigate('/events');
  }

  return (
     <Navbar className="navarColor"  expand="lg">
      <Container fluid>
         <Navbar.Brand className="text-font texto-borde " onClick={handleHome}>Traveling</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
             className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
             navbarScroll
           >
           </Nav>
           <Nav.Link onClick={handleLogin} >Login</Nav.Link>
           <NavDropdown title="Menú" id="navbarScrollingDropdown">
             <NavDropdown.Item href="#action3"></NavDropdown.Item>
             <NavDropdown.Item onClick={handleFavorits}>
               Favoritos
             </NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item onClick={handleAcount}>
               Cuenta
             </NavDropdown.Item>
             <NavDropdown.Divider />
           <NavDropdown.Item href="#action5">
              Cerrar Sesión
            </NavDropdown.Item>

           </NavDropdown>
           <Nav.Link onClick={handleEvents} >
             Eventos y Ofertas
          </Nav.Link>


         <Seeker></Seeker>
         </Navbar.Collapse>
       </Container>

     </Navbar>
  );
}

export default Navar_user
