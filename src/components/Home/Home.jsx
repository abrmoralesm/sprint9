import React, { useEffect, useState } from "react";
import {
  ColumnContainer,
  Column,
  Slider,
  Image,
  IconWrapper,
  Wellcome,
} from "./HomeStyled";
import {
  IoBookSharp,
  IoSearchCircleOutline,
  IoLockOpenOutline,
} from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import foto1 from "../../assets/imagenesslider/foto1.jpg";
import foto2 from "../../assets/imagenesslider/foto2.jpg";

const Home = () => {
  const images = [foto1, foto2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Wellcome>Wellcome to The Metropolitan Museum of Art Collection</Wellcome>
      <Slider>
        <Image
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
        />
      </Slider>

      <ColumnContainer>
        <Column>
          <h2>
            <IconWrapper>
              <IoBookSharp />
            </IconWrapper>
            Libraries and Research Centers
          </h2>
          <p>
            The Met's unparalleled resources for research welcome an
            international community of students and scholars.
          </p>

          <h2>
            <IconWrapper>
              <IoSearchCircleOutline />
            </IconWrapper>
            Provenance Research Project
          </h2>
          <p>
            The Met is committed to researching and publishing the provenance,
            or ownership history, of its collection.
          </p>
        </Column>

        <Column>
          <h2>
            <IconWrapper>
              <IoLockOpenOutline />
            </IconWrapper>
            Open Access
          </h2>
          <p>
            Data about The Met collection, including over 492,000 images of
            public-domain artworks, available for free and unrestricted use.
          </p>

          <h2>
            <IconWrapper>
              <GiBookshelf />
            </IconWrapper>
            Research Guides
          </h2>
          <p>
            Check out our guides and library indexes to help you get started
            with your research.
          </p>
        </Column>
      </ColumnContainer>
    </div>
  );
};

export default Home;
