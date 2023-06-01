import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./auth/login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./auth/register/Register";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header"
import Principal from "./Pages/Home";
import Art from "./pages/Art";
import News from "./Pages/News";
import DetallesObra from "./components/DetallesObra/DetallesObra";
import Footer from "./components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import GlobalStyle from "./components/styledGlobal";

function App() {
  return (
    <AuthProvider>
      <>
        <GlobalStyle />
        <div>
          <Header />

          <div className='flex-grow'>
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
          </div>
          <Footer />
        </div>
      </>
    </AuthProvider>
  );
}

export default App;
