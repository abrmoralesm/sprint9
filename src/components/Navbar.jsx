import React from "react";
import { useAuth } from "../context/AuthContext";
import {
  Nav,
  NavContainer,
  NavLink,
  LogoutButton,
  RegisterLink,
} from "./NavStyled";
import logo from  "../assets/logo.png"


function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Nav>
      <NavContainer>
        <div>
          <NavLink to='/'>
            <img src={logo} alt='Logo' width='40px' height='40px' />{" "}
            {/* Utiliza el logo como enlace al home */}
          </NavLink>
          <NavLink to='/obras'>Obras</NavLink>
          <NavLink to='/noticias'>Noticias</NavLink>
        </div>

        <div>
          <div>
            {user ? (
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            ) : (
              <NavLink to='/login'>Login</NavLink>
            )}
          </div>
          {!user && <RegisterLink to='/register'>Registro</RegisterLink>}
        </div>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
