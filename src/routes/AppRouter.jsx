import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Tienda from "../pages/Tienda";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  );
}
