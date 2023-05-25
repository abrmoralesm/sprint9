import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
  padding: 2rem;
  padding: 20px;
  width: 100%;
  max-width: 1200px; /* Puedes ajustar el valor según tus necesidades */
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  flex: 1;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const DefaultImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export { Container, ImageContainer, Image, DefaultImage };
