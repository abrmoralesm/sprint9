import React from "react";
import { useAuth } from "../context/AuthContext";
import {
  Nav,
  NavContainer,
  NavLink,
  LogoutButton,
  RegisterLink,
  LogoContainer,
  ActionsContainer, // Nuevo componente styled para contener los botones
} from "./NavStyled";
import logo from "../assets/logo.png";

function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          {" "}
          {/* Contenedor para el logo */}
          <NavLink to='/'>
            <img src={logo} alt='Logo' width='80px' height='80px' />
          </NavLink>
          <NavLink to='/obras'>Obras</NavLink>
          <NavLink to='/noticias'>Noticias</NavLink>
        </LogoContainer>

        <ActionsContainer>
          {" "}
          {/* Contenedor para los botones */}
          <div>
            {user ? (
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            ) : (
              <NavLink to='/login'>Login</NavLink>
            )}
          </div>
          {!user && <RegisterLink to='/register'>Registro</RegisterLink>}
        </ActionsContainer>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
