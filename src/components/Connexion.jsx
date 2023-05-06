import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Connexion.css'
import Footer from './Footer';
import connec from './Images/connec.png';


function Connexion() {
    return (
      <div class="auth-container">
      <div class="description-auth">
    <Form  >
    <h1>CONNEXION</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" placeholder="Enter email" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button   variant="primary" type="submit">
          SE CONNECTER
    </Button><br/>
 <Link to='/register' >Forget To Register? Register Now!!</Link>
  </Form>
  
  </div>
    <div class="ima">
    <img src={connec} width="250" height="250"/>
  </div>
  
  
  </div>
 
        
      );
}

export default Connexion
