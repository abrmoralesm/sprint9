import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomPaintings, getImageDetails } from "../../MetropolitanApi";
import {
  Container,
  ImageContainer,
  Image,
  DefaultImage,
  LoadingContainer,
} from "./ObrasRandomStyled";

const ObrasRandom = () => {
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      if (paintings.length === 0) {
        let fetchedPaintings = [];
        let counter = 0;

        while (fetchedPaintings.length < 4 && counter < 10) {
          const data = await getRandomPaintings(4 - fetchedPaintings.length);
          fetchedPaintings = [...fetchedPaintings, ...data];
          counter++;
        }

        setPaintings(fetchedPaintings);
      }
      setIsLoading(false);
    };

    fetchPaintings();
  }, [paintings]);

  const handleImageClick = async (objectId) => {
    const paintingDetails = await getImageDetails(objectId);
    setSelectedPainting(paintingDetails);
  };

  const getValidImageUrl = (url) => {
    return url
      ? url
      : "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg";
  };

  return (
    <div>
      <Container>
        {!isLoading && <h1>Mostrando 4 pinturas aleatorias <br/> Click para ver información</h1>}
        {isLoading ? (
          <LoadingContainer
           
          >
            <p>Cargando...</p>
          </LoadingContainer>
        ) : (
          <ImageContainer>
            {paintings.length > 0 ? (
              paintings.map((painting) => (
                <Link
                  key={painting.objectID}
                  to={`/detallesobra/${painting.objectID}`}
                >
                  <Image
                    src={getValidImageUrl(painting.primaryImageSmall)}
                    alt={painting.title}
                    onClick={() => handleImageClick(painting.objectID)}
                  />
                </Link>
              ))
            ) : (
              <DefaultImage
                src='https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg'
                alt='Imagen predeterminada'
              />
            )}
          </ImageContainer>
        )}
      </Container>
    </div>
  );
};

export default ObrasRandom;
