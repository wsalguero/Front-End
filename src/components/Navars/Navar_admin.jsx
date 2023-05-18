import React from 'react'
import "../../assets/resources/css/navarStyles.css"
import Seeker from '../Sekkers/Sekker'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navar_admin() {
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
        navigate('/estadisticas');
    }
    return (
        <Navbar className="navbar navbar-expand-md navarColor">
            <Container fluid>
                <Navbar.Brand className="text-font texto-borde " onClick={handleLogin}>Traveling</Navbar.Brand>
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
                        <NavDropdown.Item href="#action5">
                            Estadisticas
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3"></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleAcount}>
                            Cuenta
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Cerrar Sesión
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Ayuda y asistencia
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Opciones de administrador" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3"></NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Hoteles
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Usuarios
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Opciones avanzadas
                        </NavDropdown.Item>
                    </NavDropdown>


                    <Seeker />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navar_admin

