import React from 'react'
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo3.png'
import formateur1 from '../Images/formateur1.jpeg'
import formateur2 from '../Images/formateur2.jpg'
import formateur3 from '../Images/formateur3.jpg'
import Carousel from 'react-bootstrap/Carousel';


const Espace = () => {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><img src={logo} alt='logo' width={'80'} height={'80'} /></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/Quiz">ajouter un test</Nav.Link>
              <Nav.Link href="/Gerercours">ajouter un cour</Nav.Link>
              {/* <Nav.Link href="/Listeformation">Liste formation</Nav.Link>
         <Nav.Link href="/Listegroupe">Liste groupe</Nav.Link> */}

            </Nav>
            <Form className="d-flex">


              <Button variant="outlined" color="error">se deconnecter</Button>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={formateur1}
            alt="First slide"
            width={440}
            height={500}
          />
          <Carousel.Caption>

            <h3>Welcome!</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={formateur2}
            alt="Second slide"
            width={440}
            height={500}
          />

          <Carousel.Caption>

            <p>Si tout le monde avance ensemble, le succès viendra de lui-même</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={formateur3}
            alt="Third slide"
            width={440}
            height={500}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}


export default Espace
