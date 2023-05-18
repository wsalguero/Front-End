import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react';

import "../../assets/resources/css/cardStyles.css"
import Navar_user from '../../components/Navars/Navar_user';



function CardUser() {
  return (

    <>
      <div>
        <div className="dropdown-divider"></div>
      </div>

      <Container>
        <Row>
          <Col xs>
            <Card style={{ width: '18rem' }}>
              <Card.Header>
                <a href="">
                  <Card.Img variant="top" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" />
                </a>
                <Card.Title>"Nombre del Hotel"</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Añadir a favoritos</ListGroup.Item><div className="dropdown-divider"></div>
                  <ListGroup.Item>Reservar</ListGroup.Item><div className="dropdown-divider"></div>
                  <ListGroup.Item>Ver más</ListGroup.Item><div className="dropdown-divider"></div>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={{ order: 12 }}> <Card style={{ width: '18rem' }}>
            <Card.Header>
              <a href="">
                <Card.Img variant="top" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" />
              </a>
              <Card.Title>"Nombre del Hotel"</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Añadir a favoritos</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Reservar</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Ver más</ListGroup.Item><div className="dropdown-divider"></div>
              </ListGroup>
            </Card.Body>
          </Card>
          </Col>

          <Col xs={{ order: 1 }}> <Card style={{ width: '18rem' }}>
            <Card.Header>
              <a href="">
                <Card.Img variant="top" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" />
              </a>
              <Card.Title>"Nombre del Hotel"</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Añadir a favoritos</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Reservar</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Ver más</ListGroup.Item><div className="dropdown-divider"></div>
              </ListGroup>
            </Card.Body>
          </Card>
          </Col>
        </Row>

        <div className="container dropdown-divider"></div>

        <Row>
          <Col xs>
            <Card style={{ width: '18rem' }}>
              <Card.Header>
                <a href="">
                  <Card.Img variant="top" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" />
                </a>
                <Card.Title>"Nombre del Hotel"</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Añadir a favoritos</ListGroup.Item><div className="dropdown-divider"></div>
                  <ListGroup.Item>Reservar</ListGroup.Item><div className="dropdown-divider"></div>
                  <ListGroup.Item>Ver más</ListGroup.Item><div className="dropdown-divider"></div>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={{ order: 12 }}> <Card style={{ width: '18rem' }}>
            <Card.Header>
              <a href="">
                <Card.Img variant="top" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" />
              </a>
              <Card.Title>"Nombre del Hotel"</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Añadir a favoritos</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Reservar</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Ver más</ListGroup.Item><div className="dropdown-divider"></div>
              </ListGroup>
            </Card.Body>
          </Card>
          </Col>

          <Col xs={{ order: 1 }}> <Card style={{ width: '18rem' }}>
            <Card.Header>
              <a href="">
                <Card.Img variant="top" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" />
              </a>
              <Card.Title>"Nombre del Hotel"</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Añadir a favoritos</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Reservar</ListGroup.Item><div className="dropdown-divider"></div>
                <ListGroup.Item>Ver más</ListGroup.Item><div className="dropdown-divider"></div>
              </ListGroup>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default CardUser;
