import { Package, AlertTriangle, DollarSign, TrendingUp } from 'lucide-react';

//se instaló lucide react, una librería para íconos

const Dashboard = () => {
  // Datos de prueba (Luego vendrán del backend)
  const stats = [
    { id: 1, label: 'Productos en Stock', value: '124', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 2, label: 'Stock Crítico', value: '8', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
    { id: 3, label: 'Valor del Inventario', value: '$1.250.000', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { id: 4, label: 'Ventas del Mes', value: '45', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Panel de Control</h1>
        <p className="text-slate-500">Resumen general del inventario y ventas de Orestes.</p>
      </div>

      {/* Grid de Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className={`p-3 rounded-xl ${item.bg}`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{item.label}</p>
              <p className="text-2xl font-bold text-slate-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Espacio para Gráficos o Alertas Futuras */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-2">Sugerencia de hoy</h2>
          <p className="text-slate-400 max-w-md">
            Tenés <span className="text-red-400 font-bold">8 productos</span> con stock bajo el mínimo. 
            Te recomendamos revisar la sección de Reportes para generar un pedido de compra.
          </p>
        </div>
        {/* Decoración abstracta */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;