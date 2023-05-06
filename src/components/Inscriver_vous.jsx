import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import ins from './Images/ins.png';


function Inscriver_vous() {
  return (
    <div class="reg-container">
    <div class="description-auth">
        <Form >
           <h1>S’ENREGISTRER</h1>
            <Form.Group className="mb-3" controlId="formCin">
            <Form.Label>numéro de carte d'identité nationale</Form.Label>
            <Form.Control type="text" placeholder="Enter votre numéro de carte d'identité nationale" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Enter votre nom" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Enter votre Prenom" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date de Naissance</Form.Label>
            <Form.Control type="date" placeholder="Enter votre date de naissance" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
          S’ENREGISTRER
          </Button>
    </Form>
          </div>
    {/* <div class="ima">
    <img src= {ins} width="450" height="450"/>
  </div> */}
  </div>

   
    
        
      );
}

export default Inscriver_vous