import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchFormateur } from '../../Services/formateurservice';
function ListFormateur() {

  const [formateurs, setFormateur] = useState([])
  useEffect(() => {
    fetchFormateur().then(res => {
      setFormateur(res.data)
      console.log(res.data)
    })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>  Liste formateur  </h1>
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
          {formateurs.map((forma, index) =>
            <tr key={index}>
              <td>{forma.nom}</td>
              <td>{forma.prenom}</td>
              <td>{forma.phone}</td>
              <td>{forma.email}</td>
              <td>{forma.datenais}</td>

              <td>

                <Link to="Insertformateur"> <Button variant="primary">ajouter</Button>
                </Link>
                <Link to="Editformateur"><Button variant="secondary">modifier</Button>
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


export default ListFormateur