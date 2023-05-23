import React, { useEffect, useState } from "react";
import styled from "styled-components";

import foto1 from "../../assets/imagenesslider/foto1.jpg";
import foto2 from "../../assets/imagenesslider/foto2.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Slider>
      {currentImageIndex === 0 && <Image src={foto1} alt='Imagen 1' />}
      {currentImageIndex === 1 && <Image src={foto2} alt='Imagen 2' />}
    </Slider>
  );
};

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 768px) {
    /* Estilos para dispositivos móviles */
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Estilos para tablets */
    width: 100%;
  }
`;

export default Home;
