import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export function MetMuseumImages() {
  const [department, setDepartment] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(npm);
      const objectIDs = response.data.objectIDs;
      const randomIDs = objectIDs.sort(() => 0.5 - Math.random()).slice(0, 3);
      const promises = randomIDs.map((id) =>
        axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        )
      );
      const responses = await Promise.all(promises);
      const objects = responses.map((response) => response.data);
      setImages(objects);
    } catch (error) {
      console.error(error);
      setImages([]);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Introduce un número de departamento (1-21):
          <input
            type='number'
            min='1'
            max='21'
            value={department}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Mostrar</button>
      </form>
      {isLoading ? (
        <p>Buscando...</p>
      ) : (
        <div className='image-container'>
          {images.map((object) => (
            <div key={object.objectID} className='art-object-wrapper'>
              <img
                src={
                  object.primaryImageSmall || "https://via.placeholder.com/150"
                }
                alt={object.title}
                className='art-image'
              />
              <div className='art-object-info'>
                <p>{object.title}</p>
                <p>{object.dimensions}</p>
                <p>{object.artistDisplayName}</p>
                {object.artistDisplayBio && <p>{object.artistDisplayBio}</p>}
                <p>{object.medium}</p>
                <p>{object.objectDate}</p>
                {object.artistNationality && <p>{object.artistNationality}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


