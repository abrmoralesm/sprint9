import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logo from "../assets/logo.png";



export const Nav = styled.nav`
  background-color: #29184e;
  padding: 16px;
  height: 15%;

  @media screen and (max-width: 568px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-image: url(${logo});
    background-size: 40px; /* Cambiado de "cover" a "20px" para establecer el tamaño del logo */
    background-position: left center;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  box-shadow: inset 0 0 0 0 #54b3d6;

  font-size: 1.5em;
  font-weight: bold;
  margin-right: 16px;
  text-decoration: none;
  font-family: Roboto;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: inset 100px 0 0 0 #ec012a;
    color: white;
  }

  @media screen and (max-width: 768px) {
    display: ${({ mobilemenuopen }) => (mobilemenuopen ? "block" : "none")};
    margin: 8px 0;
    font-size: 16px;
  }
`;


export const LogoutButton = styled.button`
  color: #fff;
  margin-right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 568px) {
    display: ${({ mobilemenuopen }) => (mobilemenuopen ? "block" : "none")};
    margin: 8px 0;
    font-size: 16px;
    
  }
`;

export const RegisterLink = styled(Link)`
  color: #fff;
  box-shadow: inset 0 0 0 0 #54b3d6;

  font-size: 1.5em;
  font-weight: bold;
  margin-right: 16px;
  text-decoration: none;
  font-family: Roboto;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: inset 100px 0 0 0 #ec012a;
    color: white;
  }

  @media screen and (max-width: 768px) {
    display: ${({ mobilemenuopen }) => (mobilemenuopen ? "block" : "none")};
    margin: 8px 0;
    font-size: 16px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  @media screen and (max-width: 768px) {
   
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  color:black;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  background-color: #e5dfdfca;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #29184e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 998;

  ${NavLink}, ${LogoutButton}, ${RegisterLink} {
    color: #fff;
    font-size: 18px;
    margin: 16px 0;
    text-decoration: none;
    display: block;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const mobilemenuopen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 0.3s ease-in-out;

  ${NavLink}, ${LogoutButton}, ${RegisterLink} {
    opacity: 0;
    animation: ${fadeIn} 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const MobileMenuClose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideOut} 0.3s ease-in-out;

  ${NavLink}, ${LogoutButton}, ${RegisterLink} {
    opacity: 1;
    animation: ${fadeOut} 0.3s ease-in-out forwards;
    animation-delay: 0.1s;
  }
`;
