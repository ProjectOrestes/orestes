import { useState } from 'react';

export default function CargaStock() {
  const [formData, setFormData] = useState({
    sku: '',
    nombre: '',
    id_categoria: '', // Recuperado
    id_proveedor: '',
    precio_mayorista_sin: '',
    precio_mayorista_con: '',
    precio_venta_publico: '',
    stock_minimo: '5',
    cantidad_movimiento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'precio_mayorista_sin') {
      const sinIva = parseFloat(value) || 0;
      const conIva = (sinIva * 1.21).toFixed(2);
      setFormData({
        ...formData,
        [name]: value,
        precio_mayorista_con: conIva
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Encabezado */}
        <div className="bg-slate-800 p-6 text-white flex justify-between items-center">
          <h2 className="text-2xl font-bold italic text-blue-400">NOMBRE DE LA EMPRESA</h2>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest opacity-60">Carga de Stock</p>
           
          </div>
        </div>

        <form className="p-8 space-y-8">
          {/* SECCIÓN 1: IDENTIFICACIÓN Y CATEGORIZACIÓN */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">SKU / Código</label>
              <input name="sku" value={formData.sku} onChange={handleChange} className="border-2 border-slate-200 p-2 rounded-lg focus:border-blue-500 outline-none" type="text" placeholder="HER-001" />
            </div>
            
            <div className="md:col-span-2 flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">Nombre del Producto</label>
              <input name="nombre" value={formData.nombre} onChange={handleChange} className="border-2 border-slate-200 p-2 rounded-lg focus:border-blue-500 outline-none" type="text" placeholder="Ej: Amoladora Angular 115mm" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">Categoría</label>
              <select name="id_categoria" value={formData.id_categoria} onChange={handleChange} className="border-2 border-slate-200 p-2 rounded-lg bg-white outline-none focus:border-blue-500">
                <option value="">Elegir categoría...</option>
                <option value="1">Herramientas</option>
                <option value="2">Electricidad</option>
                <option value="3">Pinturería</option>
                <option value="4">Construcción</option>
              </select>
            </div>
          </div>

          {/* SECCIÓN 2: PANEL DE PRECIOS */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-slate-800 font-black text-sm uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-4 bg-blue-500 rounded-full"></span> Análisis de Costos e Impuestos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <label className="text-xs font-bold text-slate-500 uppercase">Mayorista (Sin IVA)</label>
                <div className="mt-1 flex items-center text-slate-700 font-bold">
                  <span className="mr-2">$</span>
                  <input name="precio_mayorista_sin" value={formData.precio_mayorista_sin} onChange={handleChange} className="w-full font-mono text-lg outline-none" type="number" placeholder="0.00" />
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                <label className="text-xs font-bold text-slate-400 uppercase text-center block">Sugerido (+21% IVA)</label>
                <div className="mt-1 flex items-center justify-center text-slate-400 font-mono italic">
                  <span>$ {formData.precio_mayorista_con || '0.00'}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 shadow-md">
                <label className="text-xs font-bold text-blue-600 uppercase text-center block tracking-tighter">Precio Venta Público (Manual)</label>
                <div className="mt-1 flex items-center text-blue-700 font-black justify-center">
                  <span className="mr-2">$</span>
                  <input 
                    name="precio_venta_publico" 
                    value={formData.precio_venta_publico} 
                    onChange={handleChange} 
                    className="w-full font-mono text-2xl bg-transparent outline-none text-center placeholder:text-blue-200" 
                    type="number" 
                    placeholder="0.00" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 3: LOGÍSTICA Y MOVIMIENTO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">Proveedor</label>
              <select name="id_proveedor" value={formData.id_proveedor} onChange={handleChange} className="border-2 border-slate-200 p-2 rounded-lg bg-white outline-none focus:border-blue-500">
                <option value="">Elegir proveedor...</option>
                <option value="1">Distribuidora Norte</option>
                <option value="2">Ferretería Central S.A.</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">Stock Mínimo (Alerta)</label>
              <input name="stock_minimo" value={formData.stock_minimo} onChange={handleChange} className="border-2 border-slate-200 p-2 rounded-lg outline-none text-center" type="number" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-black text-blue-700 uppercase italic">Cantidad a Ingresar</label>
              <input name="cantidad_movimiento" value={formData.cantidad_movimiento} onChange={handleChange} className="border-2 border-blue-600 p-2 rounded-lg bg-blue-100 outline-none text-center font-black text-blue-800 text-xl shadow-inner" type="number" placeholder="0" />
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl active:scale-[0.98] uppercase tracking-widest">
            Registrar Producto y Movimiento
          </button>
        </form>
      </div>
    </div>
  );
}