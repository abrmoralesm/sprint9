import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomPaintings } from "../../lib/MetropolitanApi";
import {
  Container,
  ImageContainer,
  Image,
  DefaultImage,
  LoadingContainer,
} from "./ObrasRandomStyled";

const RandomPaintings = ({ count }) => {
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      if (paintings.length === 0) {
        let fetchedPaintings = [];
        let counter = 0;

        while (fetchedPaintings.length < count && counter < 10) {
          const remainingCount = count - fetchedPaintings.length;
          const data = await getRandomPaintings(remainingCount);
          fetchedPaintings = [...fetchedPaintings, ...data];
          counter++;
        }

        setPaintings(fetchedPaintings);
        setIsLoading(false);
      }
    };

    fetchPaintings();
  }, [count, paintings]);

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
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
                  src={
                    painting.primaryImageSmall ||
                    "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"
                  }
                  alt={painting.title}
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
    </>
  );
};

const ObrasRandom = () => {
  return (
    <div>
      <Container>
        <h1>
          Mostrando 4 pinturas aleatorias <br /> Click para ver información
        </h1>
        <RandomPaintings count={4} />
      </Container>
    </div>
  );
};

export default ObrasRandom;
