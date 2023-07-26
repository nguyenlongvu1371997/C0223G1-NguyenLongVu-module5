import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {deleteUserById} from "../redux/Action";

export default function ListUsers() {
  
  const listUser = useSelector( state => state.users)
  const dispatch = useDispatch();

  const handelButtonDeleteUser = (id) => {
    const confirm = window.confirm("Do you want to delete");
    if(confirm){
        dispatch(deleteUserById(id));
        alert("delete successful")
    }
  };

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>
                  <button onClick={() => handelButtonDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

