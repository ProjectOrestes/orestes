import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import CargaStock from './pages/CargaStock';
import Inventario from './pages/Inventario';
import Dashboard from './pages/Dashboard';
import Reportes from './pages/Reportes';
import Register from './pages/Register'; 
import { LogOut } from 'lucide-react';

function App() {
  // Clase para los links activos
  const navLinkClass = ({ isActive }) => 
    `transition-colors duration-200 ${isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'text-slate-400 hover:text-white'}`;

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        
        {/* HEADER PRINCIPAL */}
        <header className="bg-slate-900 text-white shadow-2xl p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            
            <Link to="/dashboard" className="text-2xl font-black tracking-tighter flex items-center space-x-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-lg text-xl italic">O</span>
              <span className="text-white">ORESTES</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em]">
              <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
              <NavLink to="/carga" className={navLinkClass}>Carga</NavLink>
              <NavLink to="/inventario" className={navLinkClass}>Inventario</NavLink>
              <NavLink to="/reportes" className={navLinkClass}>Reportes</NavLink>
              <NavLink to="/register" className={navLinkClass}>Registro</NavLink>
            </nav>

            <button className="group flex items-center space-x-2 bg-slate-800 hover:bg-red-900/40 px-4 py-2 rounded-xl text-[10px] font-black border border-slate-700 hover:border-red-700 transition-all uppercase tracking-widest">
              <span className="text-slate-400 group-hover:text-red-400">Salir</span>
              <LogOut className="w-3 h-3 text-slate-500 group-hover:text-red-400" />
            </button>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/carga" element={<CargaStock />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/register" element={<Register />} /> {/* Add the new Register route */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t border-slate-100 p-8 text-center">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black">
                &copy; 2026 Project Orestes <span className="text-blue-500 mx-2">|</span> Argentina
              </p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;