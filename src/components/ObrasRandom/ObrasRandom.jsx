import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomPaintings } from "../../lib/MetropolitanApi";
import {
  Container,
  ImageContainer,
  Image,
  DefaultImage,
  LoadingContainer,
  Refresh,
} from "./ObrasRandomStyled";

const RandomPaintings = ({ count, refresh }) => {
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      setIsLoading(true);
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
    };

    fetchPaintings();
  }, [count, refresh]);

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <p>Loading...</p>
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
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <Container>
        <h1>
          Showing 4 random paintings <br /> Click to see information
        </h1>
        <RandomPaintings count={4} refresh={refresh} />
        <Refresh onClick={handleRefresh}>Refresh</Refresh>
      </Container>
    </div>
  );
};

export default ObrasRandom;
