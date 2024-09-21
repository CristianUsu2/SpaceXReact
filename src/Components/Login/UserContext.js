import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto
export const useUser = () => {
    return useContext(UserContext);
};
