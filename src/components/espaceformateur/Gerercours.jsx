import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TfiBackLeft } from 'react-icons/tfi';
import { fetchCour } from '../../Services/courservice';

function Gerercours() {
    const [cours, setCours] = useState([])
    useEffect(() => {
        Getlistecours()
    }, [])

    const Getlistecours = () => {
        fetchCour().then(res => {
            setCours(res.data)
        })
            .catch(error => {
                console.log(error)

            })
    }





    const columns = [

        {
            name: "nomcour",
            label: "le nom du cour",
        },


        // {
        //     name: "photo",
        //     label: "upload cour",
        //     options: {
        //         customBodyRender: (value, tableMeta, updateValue) => (
        //             <img
        //                 alt=""
        //                 style={{ height: 60, borderRadius: '80%' }}
        //             />

        //         )
        //     }
        // },

    ];



    // const options = {
    //     filterType: 'checkbox',
    // };

    return (
        <div>
            <Link to='/espaceformateur' className='nav-link' >&nbsp;&nbsp;<TfiBackLeft />&nbsp; Retour à la page Précédente</Link>

            <div className='modClients'>

                <div style={{ padding: 5, margin: 5 }}>
                    <Button
                        color="success"
                        startIcon={<AddCircleIcon />}
                        variant="contained"
                    >
                        {/* {<Link to={"/Gerercours"} style={{
                            textDecoration:
                                "none", color: "white"
                        }}>
                            Ajouter
                        </Link>
                        } */}
                    </Button>
                </div>

                <MUIDataTable
                    title={"Liste des cours"}
                    data={cours}
                    columns={columns}
                    // options={options}
                />
            </div>
        </div>
    )
}

export default Gerercours




