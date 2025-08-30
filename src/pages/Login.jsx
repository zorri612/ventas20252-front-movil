import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/Login", { email, password });
      localStorage.setItem("token", res.data.token);

      // 👇 Aquí corregido en minúsculas
      navigate("/tienda");
    } catch (err) {
      setError(err.response?.data?.msg || "Error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-msg">{error}</p>}

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}
