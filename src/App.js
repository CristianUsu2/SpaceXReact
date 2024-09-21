// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import DetalleMision from "./Components/DetalleMision";
import ListaMisiones from "./Components/ListaMisiones";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import ProtectedRoute from "./Components/Login/ProtectedRoute";
import Layout from "./Components/Layout"; // Importa el Layout
import { UserProvider } from './Components/Login/UserContext'; // Importa el UserProvider


const App = () => {
  return (

    <UserProvider>
    <Routes>
      {/* Rutas sin Layout (sin menú) */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />

      {/* Rutas con Layout (con menú) */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="misiones" element={<ListaMisiones />} />
        <Route path="misiones/detalle/:id" element={<DetalleMision />} />
      </Route>
    </Routes>
    </UserProvider>
  );
};

export default App;
