import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/userSlice";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Voulez vous vraiment supprimer cet element ?')) {
      dispatch(deleteUser(id));
    }
  }
  return (
    <div>
      <Link to="/add-user">
        <button>Add user</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <Link to={`/update-user/${u.id}`}><button>Edit</button></Link>
                  <button onClick={() => handleDeleteUser(u.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
