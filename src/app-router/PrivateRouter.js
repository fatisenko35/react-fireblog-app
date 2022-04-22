
import { Navigate, Outlet } from "react-router-dom";
import React from "react"
const PrivateRouter = () => {

 const auth = false;

   
  
    return auth ? <Outlet /> : <Navigate to="/login" />;

};

export default PrivateRouter;