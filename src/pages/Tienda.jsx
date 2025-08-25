import API from "../services/api";

export default function Tienda() {
  const producto = {
    nombre: "Camiseta Premium",
    descripcion: "Camiseta de algodón 100% orgánico.",
    precio: 25.0, // número
    imagen: "",
};


  const handleCompra = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await API.post(
      "/sales",
      {
        product: producto.nombre,
        price: 25.0, // mejor en número, no string con "$"
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


  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-gray-100 p-4 rounded shadow w-full max-w-sm text-center">
        <img src={producto.imagen} alt={producto.nombre} className="mb-4 rounded" />
        <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
        <p className="text-gray-600 mb-2">{producto.descripcion}</p>
        <p className="text-lg font-semibold mb-4">${producto.precio.toFixed(2)}</p>
        <button
          onClick={handleCompra}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
