import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import {
  Container,
  Form,
  Input,
  Button,
  ForgotPasswordLink,
  Text,
  GoogleButton,
} from "./loginStyled";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Please enter your password");
    try {
      await resetPassword(user.email);
      setError("Check your email for reset link");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      {error && <Alert message={error} />}
      <Form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-fold mb-2'
          >
            Email
          </label>
          <Input
            type='email'
            name='email'
            placeholder='your email'
            id='email'
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='******'
            onChange={handleChange}
          />
        </div>
        <div className='flex items center justify-between'>
          <Button type='submit'>Login</Button>

          <ForgotPasswordLink href='#!' onClick={handleResetPassword}>
            Forgot Password
          </ForgotPasswordLink>
        </div>
      </Form>
      <Text>
        Don't have an Account <Link to='/register'>Register</Link>
      </Text>
      <GoogleButton onClick={handleGoogleSignin}>Google Login</GoogleButton>
    </Container>
  );
}

export default Login;
