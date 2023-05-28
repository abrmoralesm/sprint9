import React from "react";
import noticiasArte from "../../bd/noticiasArte";
import {
  NewsContainer,
  ContainerNews,
  NewsItem,
  NewsImage,
  NewsContent,
} from "./NewsComponentStyled";

const NewsComponent = () => {
  return (
    <NewsContainer>
      <ContainerNews>
        {noticiasArte.map((noticia, index) => (
          <NewsItem key={noticia.id} isFirst={index === 0}>
            <NewsImage>
              <img src={noticia.imgUrl} alt={noticia.title} />
            </NewsImage>
            <NewsContent>
              <h2>{noticia.title}</h2>
              <h3>{noticia.subtitle}</h3>
              <p>{noticia.texto}</p>
              <p>{noticia.categoria}</p>
            </NewsContent>
          </NewsItem>
        ))}
      </ContainerNews>
    </NewsContainer>
  );
};

export default NewsComponent;
