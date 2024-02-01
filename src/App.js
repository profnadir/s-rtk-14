import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <h1>List Users</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
