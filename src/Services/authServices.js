// src/authService.js
import axios from 'axios';

const API_URL = 'https://api.anjeliscake.com/login.php'; // URL de tu API
const API_URL_REG = 'https://api.anjeliscake.com/register.php'; // URL de tu API


const authServices = {
    login: async (username, password) => {
        try {
            const response = await axios.post(API_URL, {
                usuario: username,
                contrasena: password,
            }, {
                headers: {
                     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });

            // Maneja la respuesta, incluyendo el token
            if (response.data && response.data[0].token) {
                const token = response.data[0].token;
                // Guarda el token en localStorage o en un contexto de estado
                localStorage.setItem('authToken', token);
                return response.data;
            } else {
                throw new Error('No se recibió un token de autenticación');
            }

        } catch (error) {
            throw new Error('Error en la autenticación: ' + (error.response?.data?.mensaje || error.message));
        }
    },



    register: async (name,lastname,username, password) => {
        try {
            const response = await axios.post(API_URL_REG, {
                nombres: username,
                apellidos: username,
                email: username,
                contrasena: password,
            }, {
                headers: {
                     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });

            // Maneja la respuesta, incluyendo el token
            if (response.data ) {
  
                return response.data;
            } else {
                throw new Error('No se pudo crear el usuario');
            }

        } catch (error) {
            throw new Error('Error en la creacion de usuario ' + (error.response?.data?.mensaje || error.message));
        }
    }

};

export default authServices;
