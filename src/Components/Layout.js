import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu"

const Layout = () => {
    const location = useLocation();

    // Rutas en las que no queremos mostrar el Menu
    const hideMenuRoutes = ["/login", "/register"];

    const shouldShowMenu = !hideMenuRoutes.includes(location.pathname);

    return (
        <div>
            {shouldShowMenu && <Menu />}
            {/* Renderiza el componente correspondiente de acuerdo a la ruta */}
            <Outlet />
        </div>
    );
};

export default Layout;
