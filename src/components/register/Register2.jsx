import React from 'react'
import { FaUserNurse } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
// import Menu from './Menu';

function Register2() {
  const navigate = useNavigate();

  const handleGoToRegister = (role) => {
    navigate({
      pathname: "/register",
      search: createSearchParams({
        role: role
      }).toString()
    });
  }

  return (
    <>
      {/* <Menu /> */}

      <div style={{ paddingBottom: '390px', paddingTop: '80px' }}>
        <div className="row g-5" style={{ paddingLeft: '390px' }}>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <button onClick={() => handleGoToRegister('formateur')} style={{ color: 'gray', fontSize: '50px', background: 'none', border: 'none' }}><FaUserNurse /></button>
              </div>
              <h4 className="mb-3">Espace Formateur</h4>
              <p className="m-0">Inscription Formateur </p>

            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <button onClick={() => handleGoToRegister('apprenant')} style={{ color: 'gray', fontSize: '50px', background: 'none', border: 'none' }}><BsPersonCircle /></button>
              </div>
              <h4 className="mb-3">Espace Apprenant</h4>
              <p className="m-0"> Inscription Apprenant</p>

            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Register2
