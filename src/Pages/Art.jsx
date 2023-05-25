import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomPaintings, getImageDetails } from "../MetropolitanApi";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const DefaultImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Art = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      let fetchedPaintings = [];
      let counter = 0;

      while (fetchedPaintings.length < 5 && counter < 10) {
        const data = await getRandomPaintings(5 - fetchedPaintings.length);
        fetchedPaintings = [...fetchedPaintings, ...data];
        counter++;
      }

      setPaintings(fetchedPaintings);
      setIsLoading(false);
    };

    fetchPaintings();
  }, []);

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
      <h1>Mostrar 5 pinturas aleatorias</h1>
      {isLoading ? (
        <p>Cargando...</p>
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
    </div>
  );
};

export default Art;
