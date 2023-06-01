import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import GlobalStyle from "./styledGlobal";
import "@fortawesome/fontawesome-free/css/all.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Principal from "./Pages/Home";
import Art from "./pages/Art";
import News from "./Pages/News";
import DetallesObra from "./components/DetallesObra/DetallesObra";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Principal />} />
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
      <Footer />
    </AuthProvider>
  );
}

export default App;
