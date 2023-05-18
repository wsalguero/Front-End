import { useEffect, useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/resources/css/tablesStyle.css'
import { getUsers } from "../../api/ApiUsers";
import { User } from "../../components/Users/User";


const TablesUsers = () => {

    const [users, setUsers] = useState([]);

    const reload = async () => {
        const result = await getUsers  ();
        //console.log(result);
        setUsers(result);
    }

    useEffect(() => {
        reload();
    }, []);

    return (
        <>
        <div>
            <Link to='add'>
                <button className="btn btn-primary mt-3" >
                    Add Usuario
                </button>
            </Link>
            <h2 className="table-title">Usuarios</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Rol</th>
                        <th scope="col">CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((users) => {
                            return (
                                <User key={users._id} {...users} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        </>
    )
}

export default TablesUsers
