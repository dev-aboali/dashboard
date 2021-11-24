import React, { useState } from 'react'
import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userList } from '../../data'
import { Link } from 'react-router-dom';

  
 
  
export default function UserList() {
    const [data, setData] = useState(userList)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
            field: 'user',
            headerName: 'User',
            width: 220,
            renderCell: (params) => {
                return(
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="" className="userListImg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 110,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 80,
            renderCell: (params) => {
          
                return(
                    <>
                        <Link to={`/users/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    
      ];

    const handleDelete = (id) => {
        let usersData = data.filter(user => user.id !== id)
        setData(usersData)
    }
    return (
        <div className="userList">
             <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
