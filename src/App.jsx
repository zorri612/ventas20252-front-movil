import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Tienda from "./pages/Tienda.jsx";

export default function AppRouter() {
  const isAuthenticated = !!localStorage.getItem("token"); // true si hay token

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida */}
        <Route
          path="/tienda"
          element={isAuthenticated ? <Tienda /> : <Navigate to="/login" />}
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
