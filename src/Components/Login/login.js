import React, { useState } from 'react';
import axios from 'axios';
import authServices from '../../Services/authServices';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'; // Asegúrate de que este archivo CSS tenga un estilo moderno
import { useUser } from './UserContext'; // Ajusta la ruta según tu estructura de archivos


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook de navegación

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await authServices.login(username, password);
    //         console.log(response); // Maneja la respuesta del servicio
    //         localStorage.setItem('token', response.token); // Guarda el token en localStorage
    //         toast.success('¡Acceso autorizado!'); // Mostrar mensaje de éxito
    //         // Redirigir a la página de misiones
    //         navigate('app/misiones');
    //     } catch (error) {
    //         toast.error('¡Error! Usuario o contraseña incorrectos.'); // Mostrar mensaje de error
    //     }
    // };

    const { setUsuario } = useUser(); // Usar el hook del contexto


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await authServices.login(username, password);
            console.log(response); // Maneja la respuesta del servicio
            localStorage.setItem('token', response[0].token); // Guarda el token en localStorage
            setUsuario(response[0].usuario); // Almacena el usuario en el contexto
           
            toast.success('¡Acceso autorizado!'); // Mostrar mensaje de éxito
            // Redirigir a la página de misiones
            navigate('app/misiones');
           
        } catch (error) {
            toast.error('¡Error! Usuario o contraseña incorrectos.'); // Mostrar mensaje de error
        }
    };

    return (
        <div className="login-container">
            <ToastContainer />
         
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="username" className="input-label">Usuario:</label>
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
                <button type="submit" className="submit-button">Iniciar sesión</button>
               <div></div> 
                <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p> {/* Enlace a la página de registro */}
            </form>
          
        </div>
    );
};

export default Login;
