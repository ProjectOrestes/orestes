import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CargaStock from './pages/CargaStock';
import Inventario from './pages/Inventario';
import Dashboard from './pages/Dashboard';
import Reportes from './pages/Reportes';
import Register from './pages/Register'; 
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/carga" element={<CargaStock />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
