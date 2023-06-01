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
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los detalles de la obra: {error}</p>;
  }

  return (
    <>
      <Titulo>{obra.title}</Titulo>
      <InfoContainer>
        <ImageContainer>
          <ObraImage src={obra.primaryImageSmall} alt={obra.title} />
        </ImageContainer>
        <InfoContent>
          <h2>Características de la obra</h2>
          <p>Título: {obra.title}</p>
          <p>
            Autor: {obra.artistDisplayName} - {obra.artistDisplayBio}
          </p>
          <p>Año: {obra.objectDate}</p>
          <p>Técnica: {obra.medium}</p>
          <p>Dimensiones: {obra.dimensions}</p>
        </InfoContent>
      </InfoContainer>
      <VolverButton to='/Art'>Volver a Art</VolverButton>
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
