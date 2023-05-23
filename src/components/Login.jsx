import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {Alert}from "./Alert"




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

  const handleResetPassword = async(e) =>{
    e.preventDefault();
    if (!user.email)return setError("Please enter your password");
    try{
      await resetPassword(user.email)
      setError("Check your email for reset link")
    } catch(error){
      setError(error.message)
    
    }
  }

  return (
    <div className='w-full align-middle max-w-xs m-auto mt-10'>
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-fold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='your email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='******'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={handleChange}
          />
        </div>
        <div className='flex items center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline'>
            Login
          </button>

          <a
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
            href='#!'
            onClick={handleResetPassword}
          >
            Forgot Password
          </a>
        </div>
      </form>
      <p className='my4 text-white text-sm flex justify-between px-3'>
        Don't have an Account <Link to='/register'>Register</Link>
      </p>
      <button
        onClick={handleGoogleSignin}
        className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'
      >
        Google Login
      </button>
    </div>
  );
}

export default Login;