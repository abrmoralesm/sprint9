import styled from "styled-components";
import { Link } from "react-router-dom";


export const DetallesObraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

export const ObraImage = styled.img`
  width: 90%;
  height: auto;
  margin-bottom: 20px;
`;

export const CaracteristicasObra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(110, 110, 110, 1);
  font-family: "SFMOMADisplayRegular";
`;

export const VolverButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #000;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "SFMOMADisplayRegular";
`;
