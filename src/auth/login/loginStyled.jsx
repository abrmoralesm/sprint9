import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: middle;
  max-width: 20rem;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: 550px) {
    margin-top: 7rem;
    max-width: 20rem;
    height: 100vh;
  }
`;

export const Form = styled.form`
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 2rem;

  
  div{
margin-bottom: 1rem;
  }

  @media (max-width: 550px) {
    padding: 3rem;
    
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-family: SFMOMADisplayRegular;
  color: #4a5568;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const Button = styled.button`
  background-color: #4299e1;
  color: white;
  font-family: SFMOMADisplayRegular;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3182ce;
  }
`;

export const ForgotPasswordLink = styled.a`
  display: inline-block;
  font-family: SFMOMADisplayRegular;
  font-size: 0.875rem;
  color: #4299e1;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1a4c8b;
  }
`;

export const Text = styled.p`
  margin-top: 4rem;
  font-family: SFMOMADisplayRegular;
  color: white;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.75rem;

  @media (max-width: 550px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const GoogleButton = styled.button`
  background-color: #f7fafc;
  color: black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  border: 2px solid #e2e8f0;
  padding: 0.5rem 1rem;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3182ce;
    color: #fff
  }

  @media (max-width: 550px) {
    margin-top: 2rem;
  }
`;
