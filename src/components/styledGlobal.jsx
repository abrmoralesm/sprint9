import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default GlobalStyle;
