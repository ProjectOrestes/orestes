import { useState, useEffect } from 'react';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // Simulamos carga desde el Backend
    const cargarProductos = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600)); // Delay realista
      
      const data = [
        { id: 1, sku: 'HER-001', nombre: 'Amoladora Bosch', categoria: 'Herramientas', stock: 12, stock_min: 5, precio: 85000 },
        { id: 2, sku: 'ELE-042', nombre: 'Cable TPR 2x2.5mm', categoria: 'Electricidad', stock: 3, stock_min: 10, precio: 124000 },
        { id: 3, sku: 'PIN-102', nombre: 'Látex Interior 20L', categoria: 'Pinturería', stock: 25, stock_min: 8, precio: 48500 },
        { id: 4, sku: 'HER-002', nombre: 'Taladro Percutor DeWalt', categoria: 'Herramientas', stock: 2, stock_min: 5, precio: 115000 },
      ];
      
      setProductos(data);
      setLoading(false);
    };

    cargarProductos();
  }, []);

  // Lógica de filtrado (se ejecuta cada vez que cambia el filtro, la búsqueda o los productos)
  const productosFiltrados = productos.filter(prod => {
    const coincideFiltro = 
      filtro === 'Todos' || 
      (filtro === 'Stock Bajo' && prod.stock <= prod.stock_min) ||
      prod.categoria === filtro;

    const coincideBusqueda = 
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
      prod.sku.toLowerCase().includes(busqueda.toLowerCase());

    return coincideFiltro && coincideBusqueda;
  });

  return {
    productos: productosFiltrados,
    loading,
    filtro,
    setFiltro,
    busqueda,
    setBusqueda,
    totalOriginal: productos.length
  };
};