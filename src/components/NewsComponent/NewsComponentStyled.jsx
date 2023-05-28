import styled from "styled-components";

const purpleColor = "#29184e";

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${purpleColor};
  padding: 20px;
  margin: 2rem;
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
  gap: 20px;
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
`;

export const NewsImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-left: 2em;
  }
`;

export const NewsContent = styled.div`
  flex: 1;
  padding: 16px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #666666;
  }
`;
