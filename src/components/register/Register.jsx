import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/authSlice";
import { fetchFormation } from "../../Services/formationservice";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FORMATEUR, APPRENANT } from '../utils/roles'
import { buildFormData } from "../utils/ConvertFormData";

function Register() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const role = searchParams.get('role') || APPRENANT
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [datenais, setDatenais] = useState("");



  // const [formationID, setFormationID] = useState("")
  // const [formation, setFormation] = useState([])

  // useEffect(() => {
  //   fetchFormation().then(res => {
  //     setFormation(res.data)
  //   })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])



  //   const { user, isSuccess, isError } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords do not match')
    } else {

      const userData = {
        firstName: firstName,
        datenais: datenais,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password,
        role: role,
      }
      // const formData = new FormData();
      // buildFormData(formData, userData);
      dispatch(register(userData))
      navigate('/login')
    }
  };
  return (
    <div>
      {/* <Menu /> */}
      {/* Appointment Start */}
      <div className="container-fluid bg-primary my-5 py-5" >
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Inscription {role === FORMATEUR ? 'formateur' : 'apprenant'}</h5>
                <h1 className="display-4"> Créer un compte </h1>
              </div>
              <p className="text-white mb-5"> vous devez créer un compte pour consulter service de {role === FORMATEUR ? 'formateur' : 'apprenant'} </p>
              <Link className="btn btn-dark rounded-pill py-3 px-5 me-3" to="/login"> Connecter </Link>

            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4"> Inscrivez-vous </h1>

                <form onSubmit={handleSubmit} >
                  <div className="row g-3" style={{ alignItems: 'center' }}>
                    <div className="col-12 col-sm-6">
                      <input type="text"
                        className="form-control bg-light border-0"
                        id="lastName"
                        required
                        autoComplete="family-name"
                        label="Last Name"
                        name="lastName"
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Nom"
                        style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text"
                        className="form-control bg-light border-0"
                        placeholder="Prénom"
                        name="firstName"
                        autoComplete="given-name"
                        required
                        id="firstName"
                        label="First Name"
                        onChange={(event) => setFirstName(event.target.value)}
                        style={{ height: '55px' }}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Numéro mobile"
                        style={{ height: '55px' }}
                        name="phone"
                        autoComplete="given-phone"
                        required
                        id="phone"
                        label="phone"
                        onChange={(event) => setPhone(event.target.value)} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="date"
                        className="form-control bg-light border-0"
                        placeholder="Numéro mobile"
                        style={{ height: '55px' }}
                        name="datenais"
                        autoComplete="given-datenais"
                        required
                        id="datenais"
                        label="datenais"
                        onChange={(event) => setDatenais(event.target.value)} />
                    </div>



                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Email"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(event) => setEmail(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>
                    {/* liste specilites */}
                    {/* {
                      role === FORMATEUR && (
                        <div className="col-12">
                          <select className="form-control bg-light border-0"
                            style={{ height: '55px' }}

                            as="select"
                            type="select"
                            value={formationID}
                            onChange={(e) => setFormationID(e.target.value)}
                          >
                            <option>choisie formation </option>
                            {formation ? formation.map((form) => <option key={form._id}
                              value={form._id}>{form.type}</option>) : null}
                          </select>
                        </div>
                      )
                    } */}

                    <div className="col-12 col-sm-6">
                      <input type="password"
                        className="form-control bg-light border-0"
                        placeholder="Mot de passe"
                        required
                        name="password"
                        label="Password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(event) => setPassword(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="password"
                        className="form-control bg-light border-0"
                        placeholder="confirmer Mot de passe"
                        required
                        name="password2"
                        label="Confirm Password"
                        id="cpassword"
                        autoComplete="Confirm-password"
                        onChange={(event) => setPassword2(event.target.value)}
                        style={{ height: '55px' }} />
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit" style={{ width: "30px", fontSize: "30px" }}>S'inscrire</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
      <br /> <br />
      {/* Appointment End */}
    </div >
  )
}

export default Register
