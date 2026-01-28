import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, AlertCircle, CheckCircle2, Package, Filter } from 'lucide-react';

export default function Inventario() {
  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const productosIniciales = [
    { id: 1, sku: 'HER-001', nombre: 'Amoladora Bosch', categoria: 'Herramientas', stock: 12, stock_min: 5, precio: 85000 },
    { id: 2, sku: 'ELE-042', nombre: 'Cable TPR 2x2.5mm', categoria: 'Electricidad', stock: 3, stock_min: 10, precio: 124000 },
    { id: 3, sku: 'PIN-102', nombre: 'Látex Interior 20L', categoria: 'Pinturería', stock: 25, stock_min: 8, precio: 48500 },
    { id: 4, sku: 'HER-002', nombre: 'Taladro Percutor DeWalt', categoria: 'Herramientas', stock: 2, stock_min: 5, precio: 115000 },
  ];

  const productosFiltrados = productosIniciales.filter(prod => {
    const coincideFiltro = 
      filtro === 'Todos' || 
      (filtro === 'Stock Bajo' && prod.stock <= prod.stock_min) ||
      prod.categoria === filtro;

    const coincideBusqueda = 
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
      prod.sku.toLowerCase().includes(busqueda.toLowerCase());

    return coincideFiltro && coincideBusqueda;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* HEADER DE SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Inventario de <span className="text-blue-600">Orestes</span></h1>
          <p className="text-slate-500">Control de existencias y niveles de reposición.</p>
        </div>
        <Link to="/carga" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-blue-100 active:scale-95">
          <Plus className="w-5 h-5" />
          <span>Nuevo Producto</span>
        </Link>
      </div>

      {/* BUSCADOR Y FILTROS */}
      <div className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar por nombre o SKU..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-transparent rounded-2xl outline-none text-slate-700 font-medium placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center px-2 bg-slate-50 rounded-2xl overflow-x-auto scrollbar-hide gap-1 p-1">
          {['Todos', 'Stock Bajo', 'Herramientas', 'Electricidad', 'Pinturería'].map((opcion) => (
            <button
              key={opcion}
              onClick={() => setFiltro(opcion)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                filtro === opcion 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>

      {/* TABLA PROFESIONAL */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] uppercase font-black tracking-[0.2em]">
              <th className="px-6 py-5 text-left">Referencia</th>
              <th className="px-6 py-5 text-left">Descripción</th>
              <th className="px-6 py-5 text-center">Stock Actual</th>
              <th className="px-6 py-5 text-center">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((prod) => (
                <tr key={prod.id} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-slate-400 group-hover:text-blue-600">
                    {prod.sku}
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-slate-800 leading-tight">{prod.nombre}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">{prod.categoria}</div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-lg font-black text-slate-700">{prod.stock}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      {prod.stock <= prod.stock_min ? (
                        <span className="flex items-center space-x-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase border border-red-100">
                          <AlertCircle className="w-3 h-3" />
                          <span>Reponer</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase border border-emerald-100">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Óptimo</span>
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-20 text-center">
                  <Package className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-bold">No se encontraron productos en Orestes</p>
                  <button 
                    onClick={() => {setFiltro('Todos'); setBusqueda('');}}
                    className="text-blue-500 text-sm font-bold mt-2 hover:underline"
                  >
                    Limpiar filtros
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}