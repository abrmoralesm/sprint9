import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  background-color: #f3f3f3;
  padding: 3rem;
  margin-top: 4rem;

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
  }
`;

export const Wellcome = styled.h1`
  font-family: SFMOMADisplayRegular;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;

export const Column = styled.div`
  flex: 1;
  padding: 0 20px;
  max-width: 50%;

  h2 {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    font-family: Roboto;

    svg {
      margin-right: 10px;
    }

    :hover {
      color: #d83333;
    }
  }

  p {
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 10px;

    h2 {
      font-size: 18px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 468px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
  margin-top: 2em;

  @media screen and (max-width: 680px) {
    padding-top: 100px;
  }
`;

export const Image = styled.img`
  width: 70%;
  max-height: 100vh;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;
