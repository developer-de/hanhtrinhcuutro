import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Map from './components/Map';
import SupplyForm from './components/SupplyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Container className="app-container">
      <Row className="map">
        <Col><Map /></Col>
      </Row>
      <Row className="form">
        <Col><SupplyForm /></Col>
      </Row>
    </Container>
  );
}

export default App;
