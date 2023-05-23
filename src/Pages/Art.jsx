import React from "react";
import { useAuth } from "../context/AuthContext";
import { StyledObras } from "./obrasStyled";

function Art() {
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser ? (
        <StyledObras notLogged={!currentUser}>
          <div className='content'>
            <img
              src='https://www.lecadeauartistique.com/img/prestashop/2078.jpg'
              alt='Imagen de la obra'
            />
          </div>
        </StyledObras>
      ) : (
        <div>
          {/* Contenido para usuarios logados */}
          {/* ... */}
        </div>
      )}
    </>
  );
}

export default Art;
