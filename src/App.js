import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppCss from './App.css'
import Start from './Start'
import Form from './AdminSide/Form'
import { Button,Container,Row,Col,Nav,Navbar } from 'react-bootstrap';

function BasicExample() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={AdminSide} />
        <Route path="/admin/form" component={Form} />
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <Container>
        <Link to="/"><Start variant='success' id="btn_Start"></Start></Link>
        <Link to="/admin"><Button variant='success' id="log_in">Log in<i className="fas fa-user"></i></Button></Link>
    </Container>
  );
}

function AdminSide() {
  return (
    <Container className="wrapper">
        <Navbar bg="light" className="topNavBar" variant="light">
          <Col xs={10}>
            <Navbar><Link to="/admin/form" className="formLabel">Form</Link></Navbar>
          </Col>
          <Col>
            <Nav className="mr-auto">
              <Nav><Link to="/"><Button variant="outline-primary" id="log_out">Log out</Button></Link></Nav>
            </Nav>
          </Col>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
