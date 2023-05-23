import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from "./components/Footer/Footer";
import Login from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/Navbar";
import Obras from "./pages/Obras";
import vang from "./assets/vang.jpeg";
import GlobalStyle from "./components/styledGlobal"



function App() {
  return (
    <AuthProvider>
      <>
        <GlobalStyle backgroundImage={vang} />
        <div className='h-screen text-black flex flex-col'>
          <Navbar />

          <div className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/obras'
                element={
                  <ProtectedRoute>
                    <Obras />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    </AuthProvider>
  );
}

export default App;