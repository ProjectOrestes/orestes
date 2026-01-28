import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * COMPONENTE: Inventario
 * Este módulo se encarga de listar, filtrar y buscar productos en el stock.
 */
export default function Inventario() {
  
  // --- 1. ESTADO INICIAL (MOCK DATA) ---
  // Estos datos simulan la respuesta que eventualmente traeremos de PostgreSQL.
  const productosIniciales = [
    { id: 1, sku: 'HER-001', nombre: 'Amoladora Bosch', categoria: 'Herramientas', stock: 12, stock_min: 5, precio_publico: 85000 },
    { id: 2, sku: 'ELE-042', nombre: 'Cable TPR 2x2.5mm', categoria: 'Electricidad', stock: 3, stock_min: 10, precio_publico: 124000 },
    { id: 3, sku: 'PIN-102', nombre: 'Látex Interior 20L', categoria: 'Pinturería', stock: 25, stock_min: 8, precio_publico: 48500 },
    { id: 4, sku: 'HER-002', nombre: 'Taladro Percutor DeWalt', categoria: 'Herramientas', stock: 2, stock_min: 5, precio_publico: 115000 },
  ];

  // --- 2. DEFINICIÓN DE ESTADOS (HOOKS) ---
  // 'filtro' guarda la categoría seleccionada (Todos, Herramientas, etc.)
  const [filtro, setFiltro] = useState('Todos');
  // 'busqueda' guarda el texto que el usuario escribe en el input
  const [busqueda, setBusqueda] = useState('');

  // --- 3. LÓGICA DE FILTRADO (EL CEREBRO DEL COMPONENTE) ---
  // Creamos un nuevo array basado en los filtros aplicados en tiempo real.
  const productosFiltrados = productosIniciales.filter(prod => {
    
    // A. Lógica de Categorías y Alertas:
    // Retorna true si es 'Todos', si el stock es bajo o si coincide la categoría.
    const coincideFiltro = 
      filtro === 'Todos' || 
      (filtro === 'Stock Bajo' && prod.stock <= prod.stock_min) ||
      prod.categoria === filtro;

    // B. Lógica de Buscador:
    // Comparamos el texto (en minúsculas) con el nombre y el SKU.
    const coincideBusqueda = 
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
      prod.sku.toLowerCase().includes(busqueda.toLowerCase());

    // Solo si cumple AMBAS condiciones, el producto se queda en la lista.
    return coincideFiltro && coincideBusqueda;
  });

  return (
    <div className="space-y-6">
      
      {/* --- SECCIÓN: ENCABEZADO Y BUSCADOR --- */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-800">Inventario General</h2>
          {/* Link de React Router para navegar a la carga sin recargar la página */}
          <Link to="/carga" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-all text-center">
            + Nuevo Producto
          </Link>
        </div>

        {/* INPUT DE BÚSQUEDA: Actualiza el estado 'busqueda' en cada tecla pulsada */}
        <div className="relative">
          <span className="absolute left-3 top-3 opacity-30 text-xl">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar por nombre o SKU..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium"
          />
        </div>
      </div>

      {/* --- SECCIÓN: SELECTORES DE CATEGORÍA --- */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {['Todos', 'Stock Bajo', 'Herramientas', 'Electricidad', 'Pinturería'].map((opcion) => (
          <button
            key={opcion}
            onClick={() => setFiltro(opcion)} // Actualiza el estado 'filtro' al hacer clic
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              // Renderizado condicional de estilos: si está activo, se ve azul; si no, blanco.
              filtro === opcion 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-500'
            }`}
          >
            {opcion}
          </button>
        ))}
      </div>

      {/* --- SECCIÓN: TABLA DE DATOS --- */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
              <th className="p-4">SKU</th>
              <th className="p-4">Producto</th>
              <th className="p-4 text-center">Stock</th>
              <th className="p-4 text-center">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Renderizado condicional: si hay productos, mapeamos; si no, mostramos aviso */}
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono text-sm text-blue-600 font-bold">{prod.sku}</td>
                  <td className="p-4">
                    <div className="font-bold text-slate-800">{prod.nombre}</div>
                    <div className="text-[10px] text-slate-400 italic">{prod.categoria}</div>
                  </td>
                  <td className="p-4 text-center font-black text-slate-700">{prod.stock}</td>
                  <td className="p-4 text-center">
                    {/* Alerta visual basada en la comparación de stock vs stock_min */}
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${
                      prod.stock <= prod.stock_min 
                        ? 'bg-red-50 text-red-600 border-red-100' 
                        : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                    }`}>
                      {prod.stock <= prod.stock_min ? 'Reponer' : 'OK'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              // Mensaje cuando la búsqueda no arroja resultados
              <tr>
                <td colSpan="4" className="p-16 text-center">
                  <div className="text-4xl mb-2">🔎</div>
                  <div className="text-slate-500 font-bold">No encontramos coincidencias</div>
                  <div className="text-slate-400 text-sm">Probá con otro término o cambiá el filtro.</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}