import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Obtén el token de localStorage

    if (!token) {
        // Si no hay token, redirige al inicio de sesión
        return <Navigate to="/" />;
    }

    return children; // Si hay token, renderiza los hijos (componente protegido)
};

export default ProtectedRoute;
