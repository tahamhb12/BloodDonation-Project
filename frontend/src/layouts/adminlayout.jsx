import { Navigate, Outlet } from "react-router";
import useAuthContext from "../context/AuthContext";
import { useEffect } from "react";
const Adminlayout = () => {
    const {user ,administator} = useAuthContext()


    return user?.email == administator() ? <Outlet/> : <Navigate to={"/"}/>
}
 
export default Adminlayout;