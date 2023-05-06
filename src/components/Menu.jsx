import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Images/logo3.png'

function menu() {
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt='logo'width={'80'}height={'80'}/></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <NavDropdown title="Nos Partenaires" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">education</NavDropdown.Item>
              <NavDropdown.Item href="#action4">1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                plus
              </NavDropdown.Item>
            </NavDropdown>

               <NavDropdown title="Cours" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">cour1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                plus
              </NavDropdown.Item>
            </NavDropdown>
            
          <Nav.Link href="/register2">Inscription</Nav.Link>
          <Nav.Link href="/Admin">Admin</Nav.Link>
          <Nav.Link href="/Espace">Espace formateur</Nav.Link>
          <Nav.Link href="/Espp">Espace apprenant</Nav.Link>
       
          </Nav>
          <Form className="d-flex">
          
         
          <Button variant="outline-success" ><Nav.Link href="/login">Connexion</Nav.Link> </Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default menu
