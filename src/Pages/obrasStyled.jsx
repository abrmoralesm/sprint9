import styled from "styled-components";
import backgroundImage from "../assets/vang.jpeg"

export const StyledObras = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .content {
    max-width: 7xl;
    margin: auto;
    padding: 12px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      max-width: 500px;
      margin: auto;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
