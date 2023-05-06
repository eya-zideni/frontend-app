import React from 'react'
import { useState , useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { addFormateur } from '../../Services/formateurservice';

function Insertformateur() {
  const [validated, setValidated] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [num_tel, setNum_tel] = useState("");
  const [dat_naiss, setDat_naiss] = useState("");
   


const navigate=useNavigate();



 
const handleSubmit = (event) => {
event.preventDefault();
const form = event.currentTarget;
if (form.checkValidity() === true) {
  const formateur={
  nom: nom,
  prenom: prenom,
  adresse: adresse,
  num_tel: num_tel,
  dat_naiss: dat_naiss
  
  }
  addFormateur (formateur)
  .then(res=>{
    console.log("Insert OK",res);
    navigate("/ListFormateur");
    })
    .catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })
    }
    
// if (form.checkValidity() === true) {
//   console.log("valeurs valides")
//   }
  setValidated(true);
  };
  
  return (
    <>

<div className="container w-100 d-flex justify-content-center">
<div className=' mt-5 w-50'>
<h1 align="center">Ajout formateur</h1>
<div className='form mt-3'>
<Form className="border p-3" noValidate validated={validated}
onSubmit={handleSubmit}>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Nom *</Form.Label>
<Form.Control
required
type="text"
placeholder="nom"
value={nom}
onChange={(e)=>setNom(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir le nom du formateur
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>prenom *</Form.Label>
<Form.Control
required
type="text"
placeholder="prenom"
value={prenom}
onChange={(e)=>setPrenom(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir prenom
</Form.Control.Feedback>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>adresse *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="adresse"
value={adresse}
onChange={(e)=>setAdresse(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
adresse Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Num_tel</Form.Label>
<Form.Control

type="text"
required
placeholder="num_tel"
value={num_tel}
onChange={(e)=>setNum_tel(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
dat_naiss<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="text"
value={dat_naiss}
onChange={(e)=>setDat_naiss(e.target.value)}
placeholder="dat_naiss"
/>
<Form.Control.Feedback type="invalid">
dat_naiss Incorrect
</Form.Control.Feedback>
</Form.Group>

</Row>
<center><Button type="submit">Enregistrer</Button></center>
</Form>
</div>
</div>
</div>
</>
)
}

export default Insertformateur
