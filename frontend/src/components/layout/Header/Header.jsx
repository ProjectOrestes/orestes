import { NavLink, Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import OrestesLogo from '../../ui/icons/OrestesLogo';

const Header = () => {

  const navLinkClass = ({ isActive }) => 
    `transition-colors duration-200 ${isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'text-slate-400 hover:text-white'}`;

  return (
    <header className="bg-slate-900 text-white shadow-2xl p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/dashboard" className="flex items-center">
           <OrestesLogo className="h-4.5 w-auto text-white" />
           </Link>
        
        <nav className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em]">
          <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
          <NavLink to="/carga" className={navLinkClass}>Carga</NavLink>
          <NavLink to="/inventario" className={navLinkClass}>Inventario</NavLink>
          <NavLink to="/reportes" className={navLinkClass}>Reportes</NavLink>
          <NavLink to="/register" className={navLinkClass}>Registro</NavLink>
          <NavLink to="/login" className={navLinkClass}>Iniciar sesión</NavLink>
        </nav>

        <button className="group flex items-center space-x-2 bg-slate-800 hover:bg-red-900/40 px-4 py-2 rounded-xl text-[10px] font-black border border-slate-700 hover:border-red-700 transition-all uppercase tracking-widest">
          <span className="text-slate-400 group-hover:text-red-400">Salir</span>
          <LogOut className="w-3 h-3 text-slate-500 group-hover:text-red-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
