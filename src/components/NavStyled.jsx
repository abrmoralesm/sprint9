import { Link } from "react-router-dom";

import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #333;
  padding: 16px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;
  text-decoration: none;
`;

export const LogoutButton = styled.button`
  color: #fff;
  margin-right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const RegisterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

// Otros estilos que necesites...
