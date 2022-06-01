import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
/* Descripcion uso de react icons-fragmentos-los hooks al parecer son los useState-uuid es una libreria para generar un identificador unico */

function App() {
  return (
    <div className="App">
      <div className='tareas-lista-principal'>
        <h1>Mi lista de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
