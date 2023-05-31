import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Container } from "./FooterStyled";

const Footer = () => (
  <Container>
    <div className='FooterCont'>
      <p className='Met'>
        © 2000–2023 The Metropolitan Museum of Art. All rights reserved.
      </p>
      <ul>
        <li>
          <a href='https://www.facebook.com/metmuseum'>
            <i>
              <FaFacebook />
            </i>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/mf'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/@metmuseum'>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/metmuseum'>
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </Container>
);

export default Footer;
