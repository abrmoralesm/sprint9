import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetallesObraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px; /* Puedes ajustar el valor según tus necesidades */
  margin: 0 auto; /* Centrar el contenedor horizontalmente */

`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  margin: 40px;
  padding: 20px;
  color: #000000;
  font-family: "SFMOMADisplayRegular";
  font-size: 1.2em;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(110, 110, 110, 1);
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const ObraImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const InfoContent = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  font-family: "SFMOMADisplayRegular";
`;

export const VolverButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #000;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(110, 110, 110, 1);
  cursor: pointer;
  font-family: "SFMOMADisplayRegular";
  :hover {
    background-color: red;
    box-shadow: 10px 10px 5px 0px #7976b0;
    transform: scale(1.1, 1.1);
  }
`;
