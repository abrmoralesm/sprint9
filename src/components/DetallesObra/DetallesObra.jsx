import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageDetails } from "../../lib/MetropolitanApi";
import {
  DetallesObraContainer,
  ObraImage,
  ImageContainer,
  InfoContent,
  VolverButton,
  Titulo,
  InfoContainer,
} from "./DetallesObraEstilos";

const ObraDetails = ({ id }) => {
  const [obra, setObra] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObraDetails = async () => {
      try {
        const paintingDetails = await getImageDetails(id);
        setObra(paintingDetails);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchObraDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading work details: {error}</p>;
  }

  return (
    <>
      <Titulo>{obra.title}</Titulo>
      <InfoContainer>
        <ImageContainer>
          <ObraImage src={obra.primaryImageSmall} alt={obra.title} />
        </ImageContainer>
        <InfoContent>
          <h2>Detaills of the work</h2>
          <p>Title: {obra.title}</p>
          <p>
            Author: {obra.artistDisplayName} - {obra.artistDisplayBio}
          </p>
          <p>Year: {obra.objectDate}</p>
          <p>Medium: {obra.medium}</p>
          <p>Dimensions: {obra.dimensions}</p>
        </InfoContent>
      </InfoContainer>
      <VolverButton to='/Art'>Back to Art</VolverButton>
    </>
  );
};

const DetallesObra = () => {
  const { id } = useParams();

  return (
    <DetallesObraContainer>
      <ObraDetails id={id} />
    </DetallesObraContainer>
  );
};

export default DetallesObra;
