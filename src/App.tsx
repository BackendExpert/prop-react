import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}