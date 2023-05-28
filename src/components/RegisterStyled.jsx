import styled from "styled-components";



export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media (max-width: 580px) {
   margin-top: 4rem;
  }
`;

export const RegisterContainer = styled.div`
  width: 90%;
  max-width: 320px;
  text-align: center;
  color: black;

  @media (max-width: 580px) {
    width: 60%;
  }
`;

export const RegisterForm = styled.form`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  font-family: SFMOMADisplayRegular;
  @media (max-width: 580px) {
    padding: 10px;
  }
`;

export const RegisterLabel = styled.label`
  display: block;
  color: #4a5568;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: SFMOMADisplayRegular;
`;

export const RegisterInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px rgba(66, 153, 225, 0.5);
    border-color: #4299e1;
    font-family: SFMOMADisplayRegular;
  }
`;

export const RegisterButton = styled.button`
  background-color: #4299e1;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: SFMOMADisplayRegular;
  &:hover {
    background-color: #3182ce;
  }
`;

export const RegisterText = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-family: SFMOMADisplayRegular;
`;
export const LoginButton = styled.button`
  background-color: #4299e1;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 6px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #286cac;
  }
`;