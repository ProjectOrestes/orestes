import { useState } from 'react';
import { 
  Barcode, 
  Package2, 
  Tags, 
  Calculator, 
  Truck, 
  AlertCircle, 
  PlusCircle, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CargaStock() {
  const [formData, setFormData] = useState({
    sku: '',
    nombre: '',
    id_categoria: '',
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
    <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* BOTÓN VOLVER */}
      <Link to="/inventario" className="inline-flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver al Inventario
      </Link>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        
        {/* ENCABEZADO DE FORMULARIO */}
        <div className="bg-slate-900 p-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black tracking-tighter">ORESTES <span className="text-blue-400">STOCK</span></h2>
              <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mt-1">Registro de Nuevo Ingreso</p>
            </div>
            <div className="bg-blue-500/10 p-3 rounded-2xl">
              <Package2 className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </div>

        <form className="p-10 space-y-10">
          
          {/* SECCIÓN 1: IDENTIFICACIÓN */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-slate-400">
              <Barcode className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Identificación del Producto</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 ml-1">SKU / Código</label>
                <input name="sku" value={formData.sku} onChange={handleChange} className="bg-slate-50 border-2 border-slate-50 p-3 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-mono" type="text" placeholder="HER-001" />
              </div>
              
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 ml-1">Nombre del Producto</label>
                <input name="nombre" value={formData.nombre} onChange={handleChange} className="bg-slate-50 border-2 border-slate-50 p-3 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all" type="text" placeholder="Ej: Amoladora Angular 115mm" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 ml-1">Categoría</label>
                <div className="relative">
                   <select name="id_categoria" value={formData.id_categoria} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-50 p-3 rounded-2xl outline-none focus:border-blue-500 appearance-none cursor-pointer">
                    <option value="">Elegir...</option>
                    <option value="1">Herramientas</option>
                    <option value="2">Electricidad</option>
                    <option value="3">Pinturería</option>
                  </select>
                  <Tags className="absolute right-4 top-3.5 w-4 h-4 text-slate-300 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: PRECIOS */}
          <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 space-y-6">
             <div className="flex items-center space-x-2 text-blue-400">
              <Calculator className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Análisis de Costos (IVA 21%)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm">
                <label className="text-[10px] font-black text-slate-400 uppercase">Mayorista (Sin IVA)</label>
                <div className="mt-2 flex items-center text-slate-700 font-black text-xl">
                  <span className="text-blue-500 mr-2">$</span>
                  <input name="precio_mayorista_sin" value={formData.precio_mayorista_sin} onChange={handleChange} className="w-full outline-none font-mono" type="number" placeholder="0.00" />
                </div>
              </div>

              <div className="p-5 flex flex-col justify-center items-center border-2 border-dashed border-blue-200 rounded-2xl">
                <label className="text-[10px] font-black text-blue-300 uppercase">Sugerido con IVA</label>
                <div className="text-xl font-mono text-blue-300 mt-1 italic">
                  $ {formData.precio_mayorista_con || '0.00'}
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md border-2 border-blue-500">
                <label className="text-[10px] font-black text-blue-600 uppercase">PVP Público</label>
                <div className="mt-2 flex items-center text-slate-900 font-black text-2xl">
                  <span className="text-blue-500 mr-2">$</span>
                  <input name="precio_venta_publico" value={formData.precio_venta_publico} onChange={handleChange} className="w-full outline-none font-mono" type="number" placeholder="0.00" />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN 3: LOGÍSTICA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-700 flex items-center">
                <Truck className="w-3 h-3 mr-2 text-slate-400" /> Proveedor
              </label>
              <select name="id_proveedor" value={formData.id_proveedor} onChange={handleChange} className="bg-slate-50 border-2 border-slate-50 p-3 rounded-2xl outline-none focus:border-blue-500 appearance-none">
                <option value="">Elegir...</option>
                <option value="1">Distribuidora Norte</option>
                <option value="2">Ferretería Central S.A.</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-700 flex items-center">
                <AlertCircle className="w-3 h-3 mr-2 text-red-400" /> Stock Mínimo
              </label>
              <input name="stock_minimo" value={formData.stock_minimo} onChange={handleChange} className="bg-slate-50 border-2 border-slate-50 p-3 rounded-2xl outline-none text-center font-bold" type="number" />
            </div>

            <div className="bg-slate-900 p-1 rounded-2xl">
               <div className="bg-slate-800 rounded-xl p-3 flex flex-col">
                  <label className="text-[9px] font-black text-blue-400 uppercase tracking-tighter">Cantidad a Ingresar</label>
                  <input name="cantidad_movimiento" value={formData.cantidad_movimiento} onChange={handleChange} className="bg-transparent text-white text-2xl font-black outline-none text-center py-1" type="number" placeholder="0" />
               </div>
            </div>
          </div>

          <button className="group w-full bg-blue-600 text-white font-black py-6 rounded-[2rem] hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center space-x-3 active:scale-95">
            <PlusCircle className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            <span className="uppercase tracking-widest text-lg">Confirmar Ingreso a Orestes</span>
          </button>
        </form>
      </div>
    </div>
  );
}