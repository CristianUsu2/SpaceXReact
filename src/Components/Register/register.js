import React, { useState } from 'react';
import axios from 'axios';
import authServices from '../../Services/authServices';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './register.css'; // Asegúrate de que este archivo CSS tenga un estilo moderno

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const navigate = useNavigate(); // Hook de navegación

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await authServices.register(name,lastname,username, password);
            console.log(response); // Maneja la respuesta del servicio
            toast.success('¡Usuario Creado Con Exito!'); // Mostrar mensaje de éxito
            // Redirigir a la página de misiones
            setTimeout(() => {
                navigate('/');
            }, 4000);
          
        } catch (error) {
            toast.error('¡Error! No se pudo crear el usuario.'); // Mostrar mensaje de error
        }
    };

    return (
        <div className="login-container">
            <ToastContainer />
         
            <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
                    <label htmlFor="name" className="input-label">Nombres:</label>
                    <input
                        type="text"
                        id="name"
                        className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="lastname" className="input-label">Apellidos:</label>
                    <input
                        type="text"
                        id="lastname"
                        className="input-field"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="username" className="input-label">Email:</label>
                    <input
                        type="text"
                        id="username"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="input-label">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Crear Usuario</button>
            </form>
        </div>
    );
};

export default Register;
