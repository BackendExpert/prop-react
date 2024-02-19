import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/SignUp/Signup";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}