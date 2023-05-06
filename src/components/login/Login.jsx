import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authSlice";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import img from './Images/img-4.png';
import { FORMATEUR, APPRENANT } from '../utils/roles'
import './login.css';

// import Menu from "./Menu";
const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const objetuser = {
      email: email,
      password: password
    };
    dispatch(login(objetuser));
  }
  if (isLoggedIn) {
    console.log(user)
    if (user?.role === FORMATEUR) navigate("/Espace");
    else if (user?.role === APPRENANT) navigate("/Espp");
    //else navigate("/HomeA");
  }



  return (
    <>
      {/* <Menu/> */}
      <div className="auth-container" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
        <div className="description-auth">
          <Form onSubmit={handleSubmit} >
            <h1>CONNEXION</h1>
            <Form.Group className="mb-3"  >
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"

                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"

              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit"
              onClick={(event) => handleSubmit(event)}>
              Se Connecter
            </Button>
            <br />     <br />
            <Link to='/register2' >Inscription !!!</Link>
          </Form>

        </div>
        <div className="ima">
          {/* <img src= {img} width="250" height="250"/> */}
        </div>
      </div>

    </>
  );
}



export default Login

