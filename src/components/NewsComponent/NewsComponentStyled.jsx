import styled from "styled-components";

const purpleColor = "#29184e";
const lightGrayColor = "#f4f4f4";

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${purpleColor};
  padding: 20px;
  margin: 2rem 0;

  @media (max-width: 568px) {
    padding-top: 5rem;
    margin: 0.3rem;
    margin-top: 3rem;
  }
`;

export const ContainerNews = styled.div`
  background-color: ${purpleColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NewsItem = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 8px 4px #afafaf;
  transition: transform 0.2s ease-in-out;
  margin-top: ${({ isFirst }) => (isFirst ? "0" : "20px")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
   
  }
`;

export const Categoria = styled.text`
  font-size: 0.7rem;
  font-family: SFMOMADisplayRegular;
 
`;

export const NewsImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${lightGrayColor};
  max-width: 100%;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @media (min-width: 568px) {
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 0;
    border-bottom-left-radius: 8px;
  }
`;

export const NewsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    font-family: SFMOMADisplayRegular;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-family: SFMOMADisplayRegular;
  }

  p {
    font-size: 16px;
    font-family: SFMOMADisplayRegular;
    line-height: 1.5;
    color: #666666;
  }

  @media (min-width: 568px) {
    padding: 16px 32px;
  }
`;
