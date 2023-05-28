import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import {
  CenteredContainer,
  RegisterContainer,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
  RegisterText,
  LoginButton,
} from "./RegisterStyled";


const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <CenteredContainer>
      <RegisterContainer>
        {error && <Alert message={error} />}
        <RegisterForm onSubmit={handleSubmit}>
          <div>
            <RegisterLabel htmlFor='name'>Name</RegisterLabel>
            <RegisterInput
              type='text'
              name='name'
              placeholder='your name'
              id='name'
              onChange={handleChange}
            />
          </div>
          <div>
            <RegisterLabel htmlFor='email'>Email</RegisterLabel>
            <RegisterInput
              type='email'
              name='email'
              placeholder='your email'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div>
            <RegisterLabel htmlFor='password'>Password</RegisterLabel>
            <RegisterInput
              type='password'
              name='password'
              placeholder='******'
              id='password'
              onChange={handleChange}
            />
          </div>
          <RegisterButton type='submit'>Register</RegisterButton>
        </RegisterForm>
        <RegisterText>
          Already have an account?
          <LoginButton as={Link} to='/login'>
            Login
          </LoginButton>
        </RegisterText>
      </RegisterContainer>
    </CenteredContainer>
  );
};

export default Register;