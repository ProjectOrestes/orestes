import './app.css';

function App() {
  return (
    <div className="app-wrapper">
      <main className="main-container">
        <h1>Carga de Stock</h1>
        
        <div className="card-carga">
          <div className="input-group">
            <label htmlFor="producto">Producto</label>
            <input type="text" id="producto" placeholder="Ej: lo que vayamos a cargar" />
          </div>

          <div className="input-group">
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" id="cantidad" placeholder="0" />
          </div>

          <button type="button" className="btn-primary">
            Cargar Producto
          </button>
        </div>
      </main>

      <footer className="main-footer">
        <p>&copy; 2026 - Créditos acá</p>
      </footer>
    </div>
  );
}

export default App;