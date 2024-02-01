import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../features/userSlice';

const AddUser = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector(state => state.user.users.length);
  const handleSumbit = (e) => {
    e.preventDefault();
    const user ={
      id : count + 1,
      name : name,
      email : email
    }
    dispatch(addUser(user));
    setName('');
    setEmail('');
    navigate('/');
  }

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser