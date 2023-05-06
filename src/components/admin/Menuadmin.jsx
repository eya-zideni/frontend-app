import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Menuadmin() {
  return (
    <div>
        <Navbar>
        <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            
            
          <Nav.Link href="/ListFormateur">liste des formateur</Nav.Link>
          <Nav.Link href="/Listeapprenant">liste des apprenants</Nav.Link>
       
          </Nav>
          
         
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menuadmin