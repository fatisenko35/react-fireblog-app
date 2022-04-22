import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppRouter from "./app-router/AppRouter"


const App = () => {
  return (
    <div>
      <AppRouter />
      
    </div>
  );
};

export default App;
