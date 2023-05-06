import React from 'react';
import { fetchFormation } from "../../Services/formationservice";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



const Listeformation = () => {
    const [formation, setFormations] = useState([])
    useEffect(() => {
        fetchFormation().then(res => {
            setFormations(res.data)
            console.log(res.data)
        })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <>

           

            <div className="ListSpe">
                {/* <div style={{ padding: 5, margin: 5 }}>
        <Button
          color="success"
          startIcon={<ModeEditIcon />}
          variant="contained"
        > {<Link to={"/Editsep"} 
          style={{
            textDecoration:
              "none", color: "white"
          }}>
            Modifier specialites
          </Link>
          }
        </Button>
      </div> */}
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>NomEns</th>
                            <th>Dat_deb</th>
                            <th>Dat_fin</th>
                            <th>nbr_app</th>
                            <th>Nom_Mat</th>
                        </tr>
                    </thead>
                    <tbody>

                        {formation.map((format, index) =>
                            <tr key={index}>
                                
                                <td>{format.type}</td>
                                <td>{format.nomEns}</td>
                                <td>{format.datDeb}</td>
                                <td>{format.datFin}</td>
                                <td>{format.nbrapp}</td>
                                <td>{format.nomMat}</td>
                                {/* <td> */}

                                    {/* {<Link to={"/Editformation"} >
                                        <ModeEditIcon color='primary' />
                                    </Link>
                                    } */}
                                {/* </td> */}

                            </tr>
                        )}
                    </tbody>


                </Table>
            </div>
        </>
    )
}

export default Listeformation

