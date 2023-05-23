import React from "react";
import { useAuth } from "../context/AuthContext";
import { StyledObras } from "./obrasStyled";

function Obras() {
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser && (
        <StyledObras>
          <div className='content'>
            <img
              src='https://www.lecadeauartistique.com/img/prestashop/2078.jpg'
              alt='Imagen de la obra'
            />
          </div>
        </StyledObras>
      )}

      {currentUser && (
        <div>
          {/* Contenido para usuarios logados */}
          {/* ... */}
        </div>
      )}
    </>
  );
}

export default Obras;
