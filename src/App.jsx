import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Art from "./pages/Art";
import News from "./Pages/News"
import DetallesObra from "./components/DetallesObra/DetallesObra";
import "@fortawesome/fontawesome-free/css/all.css";

import GlobalStyle from "./components/styledGlobal";

function App() {
  return (
    <AuthProvider>
      <>
        <GlobalStyle />
        <div className='h-screen text-black flex flex-col'>
          <Navbar />

          <div className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/Art'
                element={
                  <ProtectedRoute>
                    <Art />
                  </ProtectedRoute>
                }
              />
              <Route path='/News' element={<News />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/detallesobra/:id' element={<DetallesObra />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    </AuthProvider>
  );
}

export default App;
