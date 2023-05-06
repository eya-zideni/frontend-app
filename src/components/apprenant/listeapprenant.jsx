import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchApprenant } from '../../Services/apprenantservice';
function Listeapprenant() {

  const [apprenant, setApprenant] = useState([])
  useEffect(() => {
    fetchApprenant().then(res => {
      setApprenant(res.data)
      console.log(res.data)
    })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>  Liste apprenant  </h1>
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>nom </th>
            <th>prenom</th>
            <th>adresse </th>
            <th>num_tel </th>
            <th>dat_naiss </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {apprenant.map((apprenant, index) =>
            <tr key={index}>
              <td>{apprenant.nomapp}</td>
              <td>{apprenant.prenomapp}</td>
              <td>{apprenant.datnaisapp}</td>
              <td>{apprenant.phoneapp}</td>
              <td>{apprenant.emailapp}</td>
              <td>

                <Link to="Insertapprenant"> <Button variant="primary">ajouter</Button>
                </Link>
                <Link to="Editapprenantapprenant"> <Button variant="secondary">modifier</Button>
                </Link>
                <Button variant="danger">supprimer</Button>
              </td>
            </tr>

          )}
        </tbody>

      </Table>


    </div>
  )
}


export default Listeapprenant