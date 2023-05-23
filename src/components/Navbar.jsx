import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Nav,
  NavContainer,
  NavLink,
  LogoutButton,
  RegisterLink,
  LogoContainer,
  ActionsContainer,
  MobileMenuIcon,
  MobileMenu,
  CloseButton,
} from "./NavStyled";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setMenuOpen(false); // Cerrar el menú después de hacer clic en Logout
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un NavLink
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <NavLink to='/' onClick={handleNavLinkClick}>
            <img src={logo} alt='Logo' width='80px' height='80px' />
          </NavLink>
          <NavLink to='/Art' onClick={handleNavLinkClick}>
            Art
          </NavLink>
          <NavLink to='/news' onClick={handleNavLinkClick}>
            News
          </NavLink>
        </LogoContainer>

        <ActionsContainer>
          <div>
            {user ? (
              <LogoutButton onClick={handleLogout} mobileMenuOpen={menuOpen}>
                Logout
              </LogoutButton>
            ) : (
              <NavLink
                to='/login'
                onClick={handleNavLinkClick}
                mobileMenuOpen={menuOpen}
              >
                Login
              </NavLink>
            )}
          </div>
          {!user && (
            <RegisterLink to='/register' mobileMenuOpen={menuOpen}>
              Register
            </RegisterLink>
          )}
        </ActionsContainer>

        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </MobileMenuIcon>

        {menuOpen ? (
          <MobileMenu>
            <NavLink to='/' onClick={handleNavLinkClick}>
              <img src={logo} alt='Logo' width='80px' height='80px' />
            </NavLink>
            <NavLink to='/Art' onClick={handleNavLinkClick}>
              ART
            </NavLink>
            <NavLink to='/news' onClick={handleNavLinkClick}>
              NEWS
            </NavLink>
            <div>
              {user ? (
                <LogoutButton onClick={handleLogout} mobileMenuOpen={menuOpen}>
                  Logout
                </LogoutButton>
              ) : (
                <NavLink
                  to='/login'
                  onClick={handleNavLinkClick}
                  mobileMenuOpen={menuOpen}
                >
                  Login
                </NavLink>
              )}
            </div>
            {!user && (
              <RegisterLink to='/register' mobileMenuOpen={menuOpen}>
                Register
              </RegisterLink>
            )}
            <CloseButton onClick={() => setMenuOpen(false)}>
              <i className='fas fa-times'></i>
            </CloseButton>
          </MobileMenu>
        ) : null}
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
