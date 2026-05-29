import { useState, useEffect } from 'react';
import { Package, AlertTriangle, DollarSign, TrendingUp } from 'lucide-react';

export const useDashboardStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una llamada a la API
    const fetchStats = async () => {
      setLoading(true);
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 800));

      const data = [
        { id: 1, label: 'Productos en Stock', value: '124', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
        { id: 2, label: 'Stock Crítico', value: '8', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
        { id: 3, label: 'Valor del Inventario', value: '$1.000.000', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
        { id: 4, label: 'Ventas del Mes', value: '45', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
      ];

      setStats(data);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return { stats, loading };
};