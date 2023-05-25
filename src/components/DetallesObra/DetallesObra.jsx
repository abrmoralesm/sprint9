import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageDetails } from "../../MetropolitanApi";
import {
  DetallesObraContainer,
  ObraImage,
  CaracteristicasObra,
  VolverButton,
  Titulo,
} from "./DetallesObraEstilos";

const DetallesObra = () => {
  const { id } = useParams();
  const [obra, setObra] = useState(null);

  useEffect(() => {
    const fetchObraDetails = async () => {
      const paintingDetails = await getImageDetails(id);
      setObra(paintingDetails);
    };

    fetchObraDetails();
  }, [id]);

  return (
    <DetallesObraContainer>
      {obra ? (
        <>
          <Titulo>
           {obra.title}
          </Titulo>
          <ObraImage src={obra.primaryImageSmall} alt={obra.title} />
          <CaracteristicasObra>
            <h2>Características de la obra</h2>
            <p>Título: {obra.title}</p>
            <p>Autor: {obra.artistDisplayName}</p>
            <p>Año: {obra.objectDate}</p>
            <p>Técnica: {obra.medium}</p>
            <p>Dimensiones: {obra.dimensions}</p>
          </CaracteristicasObra>
          <VolverButton to='/Art'>Volver a Art</VolverButton>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </DetallesObraContainer>
  );
};

export default DetallesObra;
