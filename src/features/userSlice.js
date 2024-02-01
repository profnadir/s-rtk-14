import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users :[
        {id:1, name:"John doe",email: "john@gmail.com"},
        {id:2, name:"Jane doe",email: "jane@gmail.com"},
    ]
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        addUser : (state,action) => {
            state.users.push(action.payload)
        },
        deleteUser : (state,action) => {
            state.users = state.users.filter(u => u.id !== action.payload)
        },
        updateUser : (state,action) => {
            const {id, updatedUser} = action.payload;
            console.log(updatedUser);
            const index = state.users.findIndex(u => u.id === parseInt(id));
            if(index !== -1){
                state.users[index] = updatedUser
            }
        }
    }
});

export const {addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;