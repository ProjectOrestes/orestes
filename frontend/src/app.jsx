import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CargaStock from './pages/CargaStock';
import Inventario from './pages/Inventario';
import Dashboard from './pages/Dashboard';
import Reportes from './pages/Reportes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        
        {/* HEADER PRINCIPAL - Navegación de la App */}
        <header className="bg-slate-900 text-white shadow-xl p-4 border-b-4 border-blue-500">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo / Link al Home */}
            <Link to="/dashboard" className="text-2xl font-black tracking-tighter text-blue-400 hover:text-blue-300 transition-colors">
              APP2 <span className="text-white font-light">STOCK</span>
            </Link>
            
            {/* Menú de Navegación */}
            <nav className="hidden md:flex space-x-6 text-sm font-bold uppercase tracking-widest">
              <Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
              <Link to="/carga" className="hover:text-blue-400 transition-colors">Carga de Stock</Link>
              <Link to="/inventario" className="hover:text-blue-400 transition-colors">Inventario</Link>
              <Link to="/reportes" className="hover:text-blue-400 transition-colors">Reportes</Link>
            </nav>

            {/* Botón de Salida */}
            <button className="bg-slate-800 px-4 py-2 rounded-lg text-xs font-bold border border-slate-700 hover:bg-red-900 hover:border-red-700 transition-all">
              SALIR
            </button>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL - Aquí se renderizan las páginas */}
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="animate-in fade-in duration-500">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/carga" element={<CargaStock />} />
              <Route path="/inventario" element={<Inventario />} />
              <Route path="/reportes" element={<Reportes />} />
              {/* Ruta por defecto redirige a Inventario para ver el stock rápido */}
              <Route path="/" element={<Inventario />} />
            </Routes>
          </div>
        </main>

        {/* FOOTER CORPORATIVO */}
        <footer className="bg-white border-t border-slate-200 p-6 text-center">
          <div className="container mx-auto">
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-black">
              &copy; 2026 Project Orestes <span className="text-blue-500 mx-2">|</span> Sistema de Gestión Profesional
            </p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;