import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { getToken } from "../services/storage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<PrivateRoute />}>
          <Route path='/home' element={<Home />}/>
        </Route>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

function PrivateRoute() {
  return !getToken() ? <Navigate to="/" /> : <Outlet />
}