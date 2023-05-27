import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .news-item {
    display: flex;
    gap: 20px;

    .news-image {
      width: 200px;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .news-content {
      flex: 1;

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
      }
    }
  }
`;


export const ContainerNews = styled.div`
background-color: #fff;
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px; /* Puedes ajustar el valor según tus necesidades */
  margin: 0 auto; 
  gap: 3;
  flex: 1;
`;