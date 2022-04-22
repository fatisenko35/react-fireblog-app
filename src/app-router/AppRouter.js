import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from '../pages/Dashboard';
import Login from "../pages/Login";
import Register from "../pages/Register";
// import News from "../pages/News";

import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/" element={<PrivateRouter />}> */}
          <Route path="/" element={<Dashboard />} />
        {/* </Route> */}
      </Routes>
    </Router>
     );
};
export default AppRouter;