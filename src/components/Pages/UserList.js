import React, {useState} from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import {userRows} from '../data'
import { Link } from "react-router-dom";

function UserList() {
    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userlist__user">
            <img className="userlist__img" src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
          return (
            <>
              <Link to={'/user/'+ params.row.id}>
                <button className="userList__edit">Edit</button>
              </Link>

              <DeleteOutlineOutlinedIcon className="userList__delete"
              onClick ={() => handleDelete(params.row.id)} />
            </>
          );
      }
    },
  ];


  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
