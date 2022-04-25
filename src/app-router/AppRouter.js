import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForm from '../components/BlogForm';
import Navbar from "../components/Navbar";
import Dashboard from '../pages/Dashboard';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
// import News from "../pages/News";

import PrivateRouter from "./PrivateRouter";
import UpdateBlog from "../pages/UpdateBlog";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-form" element={<BlogForm />} />
       <Route path="/" element={<Dashboard />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/update" element={<UpdateBlog />} />
      </Routes>
    </Router>
     );
};
export default AppRouter;