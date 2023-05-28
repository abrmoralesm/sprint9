import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
  padding: 2rem;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
 
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    padding-top: 5rem;
    grid-template-columns: repeat(1, 1fr);
  }
  
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 0.4rem;
  background-color: #d9cfcf;
  &:hover {
          filter: brightness(0.5);}
`;

const DefaultImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export { Container, ImageContainer, Image, DefaultImage };
