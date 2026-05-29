import { useState } from 'react';

export const useInventoryForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Lógica de cálculo automático de IVA
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

  const resetForm = () => setFormData(initialState);

  const handleSubmit = async (e, callback) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría tu llamada al backend (fetch o axios)
      console.log("Enviando datos a Orestes:", formData);
      
      // Simulamos una petición
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert("¡Producto cargado con éxito!");
      if (callback) callback(); // Para ejecutar algo extra al terminar
      resetForm();
    } catch (error) {
      console.error("Error al cargar:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
    resetForm
  };
};