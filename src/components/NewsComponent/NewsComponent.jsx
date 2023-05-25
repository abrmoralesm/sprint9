import React from "react";
import noticiasArte from "../../bd/noticiasArte";
import { NewsContainer, ContainerNews } from "./NewsComponentStyled";


const NewsComponent = () => {
  return (
    <NewsContainer>
      <ContainerNews>
        {noticiasArte.map((noticia) => (
          <div key={noticia.id} className='news-item'>
            <div className='news-image'>
              <img src={noticia.imgUrl} alt={noticia.title} />
            </div>
            <div className='news-content'>
              <h2>{noticia.title}</h2>
              <h3>{noticia.subtitle}</h3>
              <p>{noticia.texto}</p>
            </div>
          </div>
        ))}
      </ContainerNews>
    </NewsContainer>
  );
};

export default NewsComponent;
