import { useState } from 'react';
import { ClipboardList, AlertTriangle, DollarSign, Download } from 'lucide-react';

const Reportes = () => {
  const [reporteActivo, setReporteActivo] = useState(null);

  const informes = [
    { id: 'stock', name: 'Inventario Completo', icon: ClipboardList, color: 'blue' },
    { id: 'critico', name: 'Alertas de Reposición', icon: AlertTriangle, color: 'red' },
    { id: 'financiero', name: 'Valuación Total', icon: DollarSign, color: 'green' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Orestes <span className="text-blue-600">Analytics</span></h1>
        <p className="text-slate-500">Informes básicos del estado actual de los productos.</p>
      </div>

      {/* Selector de Reporte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {informes.map((inf) => (
          <button
            key={inf.id}
            onClick={() => setReporteActivo(inf.id)}
            className={`p-6 rounded-2xl border-2 transition-all text-left flex items-start space-x-4 ${
              reporteActivo === inf.id 
              ? 'border-blue-500 bg-blue-50 shadow-inner' 
              : 'border-white bg-white shadow-sm hover:border-slate-200'
            }`}
          >
            <div className={`p-3 rounded-lg bg-${inf.color}-100 text-${inf.color}-600`}>
              <inf.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{inf.name}</h3>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">Ver detalle</p>
            </div>
          </button>
        ))}
      </div>

      {/* Área de Visualización (Placeholder) */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 min-h-[300px] flex flex-col items-center justify-center border-dashed">
        {reporteActivo ? (
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-xl font-bold text-slate-800 uppercase">Vista previa del reporte</h2>
              <button className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition">
                <Download className="w-4 h-4" />
                <span>Exportar</span>
              </button>
            </div>
            <p className="text-slate-500 text-center py-10">
              Aquí aparecerá la tabla de <span className="font-bold text-slate-700 italic">{reporteActivo}</span> una vez conectemos el backend.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-slate-50 p-6 rounded-full inline-block mb-4">
              <ClipboardList className="w-12 h-12 text-slate-300" />
            </div>
            <p className="text-slate-400 font-medium">Seleccioná un tipo de informe para visualizar la información</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reportes;