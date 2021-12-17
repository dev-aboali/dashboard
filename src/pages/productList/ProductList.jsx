import React, { useState } from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../data'
import { Link } from 'react-router-dom';

export default function ProductList() {
    const[data, setData] = useState(productRows)


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
            field: 'product',
            headerName: 'Product',
            width: 220,
            renderCell: (params) => {
                return(
                    <div className="productListItem">
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 110,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 80,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    
      ];

    const handleDelete = (id) => {
        setData(data.filter(user => user.id !== id))
    }

    return (
        <div className="productList">
              <DataGrid
                rows={productRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
