export default function Tienda() {
  const producto = {
    nombre: "Camiseta Premium",
    descripcion: "Camiseta de algodón 100% orgánico.",
    precio: "$25.00",
    imagen: "",
  };

  const handleCompra = () => {
    alert("¡Gracias por tu compra!");
    // aquí luego enviaremos la orden al backendd
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-gray-100 p-4 rounded shadow w-full max-w-sm text-center">
        <img src={producto.imagen} alt={producto.nombre} className="mb-4 rounded" />
        <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
        <p className="text-gray-600 mb-2">{producto.descripcion}</p>
        <p className="text-lg font-semibold mb-4">{producto.precio}</p>
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
