import logo from './logo.svg';
import './App.css';
import Nav from './Componentes/Nav';
import Principal from './Paginas/Home';
import Coco from './Paginas/Coco';
import Pie from './Componentes/Foo';
import P_Link from './PruebaLink';
import Sum from './Paginas/Suma';
//import Prueba from './Componentes/Barra_Navegacion';
//import Prueba from'./Prueba';

function App() {
  return (
    <div className="App">
   
    <P_Link/>
    
    <Sum/>
    <Principal/>
    <Pie/>
    
    </div>
  );
}
//<Hom/>

export default App;
