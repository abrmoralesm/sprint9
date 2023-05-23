import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Container } from "./FooterStyled";

const Footer = () => (
  <Container>
    <div clasName='FooterCont'>
      <p className='Met'>
        © 2000–2023 The Metropolitan Museum of Art. All rights reserved.
      </p>
      <ul>
        <li>
          <a href='https://www.facebook.com/StarWars'>
            <i>
              <FaFacebook />
            </i>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/starwars/'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/user/starwars'>
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/starwars'>
            <FaTwitter />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='terms'>Terms of Use</a>
        </li>
        <li>
          <a href='privacy'>Privacy Policy</a>
        </li>
        <li>
          <a href='privacy'>Privacy Rights</a>
        </li>
      </ul>
    </div>
  </Container>
);

export default Footer;
