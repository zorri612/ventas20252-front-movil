import { useNavigate } from "react-router-dom"; // 👈 Importa useNavigate
import API from "../services/api";
import "../styles/tienda.css";

export default function Tienda() {
  const navigate = useNavigate(); // 👈 Hook para redirigir

  const producto = {
    nombre: "Monastery - Franz Polo Shirt White",
    descripcion: "Camiseta de algodón 100% orgánico.",
    precio: 25.0,
    imagen: "/camiseta.jpg",
  };

  const handleCompra = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.post(
        "/sales",
        {
          product: producto.nombre,
          price: producto.precio,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Venta registrada:", res.data);
      alert("Compra realizada con éxito");
    } catch (err) {
      console.error(err);
      alert("Error al procesar la compra");
    }
  };

  // 👇 Lógica del botón Salir
  const handleLogout = () => {
    localStorage.removeItem("token"); // Limpia la sesión
    navigate("/login"); // Redirige al login
  };

  return (
    <div className="tienda">
      {/* Header */}
      <header className="header">
        <h1>NKS Boutique</h1>

        <div className="header-right">
          {/* <button>Carrito</button> */}
          <button className="logout" onClick={handleLogout}>
            Salir
          </button>
        </div>
      </header>

      {/* Lista de productos */}
      <div className="product-list">
        <div className="product-card">
          <img src={producto.imagen} alt={producto.nombre} />
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="price">${producto.precio.toFixed(2)}</p>
          <button onClick={handleCompra}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
