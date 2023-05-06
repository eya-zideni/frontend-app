import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import{EditFormateur,fetchFormateurById} from "../../Services/formateurservice"
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState , useEffect } from 'react';


const Editeformateur = () => {
const {id} = useParams();
const navigate=useNavigate();
const [validated, setValidated] = useState(false);
const [Nom, setNom] = useState("");
const [prenom, setprenom] = useState("");
const [adresse, setadresse] = useState("");
const [num_tel, setnum_tel] = useState("");
const [dat_naiss, setdat_naiss] = useState("");


useEffect(() => {
GetUnFormateur();
},[]);
const GetUnFormateur=async()=>{
fetchFormateurById(id)
.then(res=>{
setNom(res.data.Nom)
setprenom(res.data.prenom)
setadresse(res.data.adresse)
setnum_tel(res.data.num_tel)
setdat_naiss(res.data.dat_naiss)

})
.catch(error=>{
console.log(error)
})
}
//const GetListCategories=async()=>{
//fetchSCategories()
//.then(res=>{
    //setScat(res.data)
    //})
    //.catch(error=>{
    //console.log(error)
    //alert("Erreur ! Modification non effectuée")
    //})
    //}
    const handleSubmit = (event) => {
    event.preventDefault();
    const formateur = event.currentTarget;
    if (Form.checkValidity() === true) {
    const formateur={
    _id:id,
    Nom: Nom,
    prenom: prenom,
    adresse: adresse,
    num_tel: num_tel,
    dat_naiss: dat_naiss,
    
    }
    EditFormateur (formateur)
    .then(res=>{
    console.log("Update OK",res);
    navigate("/ListeFormateur");
    })
    .catch(error=>{
    console.log(error)
    })
    }
    setValidated(true);
    };
    return (
    <>
    <div className="container w-100 d-flex justify-content-center">
    <div className=' mt-5 w-50'>
    <h1 align="center">Modification Formateur</h1>
    <div className='form mt-3'>
    <Form className="border p-3" noValidate validated={validated}
    onSubmit={handleSubmit}>
        <Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Nom *</Form.Label>
<Form.Control
required
type="text"
placeholder="Nom"
value={Nom}
onChange={(e)=>setNom(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Nom Formateur
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>prenom *</Form.Label>
<Form.Control
required
type="text"
placeholder="prenom"
value={prenom}
onChange={(e)=>setprenom(e.target.value)}
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
onChange={(e)=>setadresse(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
adresse Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>num_tel</Form.Label>
<Form.Control
type="text"
placeholder="num_tel"
value={num_tel}
onChange={(e)=>setnum_tel(e.target.value)}
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
onChange={(e)=>setdat_naiss(e.target.value)}
placeholder="dat_naiss"
/>
<Form.Control.Feedback type="invalid">
date de naissance Incorrect
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
export default Editeformateur