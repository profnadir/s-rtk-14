import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userSlice";

const UpdateUser = () => {
  const { id } = useParams();
  const user = useSelector(state => state.user.users.find(u=> u.id === parseInt(id)))
  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    e.preventDefault();
    const updatedUser ={
      id : parseInt(id),
      name : name,
      email : email
    }
    dispatch(updateUser({id,updatedUser}));
    setName('');
    setEmail('');
    navigate('/');
  }
  return (
    <div>
      <h1>Update User : {id}</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
