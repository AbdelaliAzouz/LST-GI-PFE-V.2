import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import logoReact from '../../../images/logoReact.png'
import './Navbar2.css'
import { Avatar } from '@material-ui/core';

const Navbar2 = () => {  
    return(
        <div className="Navbar2">
<Navbar bg="light" expand="lg" className="Navbar2">
  <a href="/"><img className="logoReact" src={logoReact} alt="logo"/></a>
  <Navbar.Brand href="#">Research plateforme</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '400px' }} 
      navbarScroll
    >
      <Nav.Link href="/" className="navig"><i className="fas fa-home"></i>Home</Nav.Link>
      <Nav.Link href="#action2" className="navig"><i className="fas fa-university"></i>Etablissements</Nav.Link>
      <Nav.Link href="#action3" className="navig"><i className="fas fa-newspaper"></i>Articles</Nav.Link>
      <Nav.Link href="#action4" className="navig"><i className="fas fa-user-friends"></i>Chercheurs</Nav.Link>
      <Nav.Link href="#action5" className="navig"><i className="fas fa-lightbulb"></i>About</Nav.Link>
    </Nav>
    <Nav.Link href="#action6" className="profil"><Avatar alt="Abdelali Azouz" src="/" className="Avatar"/><h6>profil</h6></Nav.Link>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      </div>
    );
};

export default Navbar2;

                  