import React from 'react'; //REACT es para que reconozca 
import './Estilo.css';
import Untitled3 from "../imagen/Untitled3.png";
import imagenes from "../imagen/images.jpg";
import imagenes1 from "../imagen/images1.jpg";
import Sum from './Suma';

import "../css/HomeCss.css"

function Principal(){
    return(
        
        
        <div className="container text-center">
            
            <h1>FORMULARIOS CON ESTILO</h1>
        <div className="row" >
          <div id="lin" className="col">
          <div  className="card" style={{width:'18rem'}}>
        <img src={Untitled3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Los amores del pasado a la papelera fueron mandados. ctrl. + suprimir, y solo tu en mi mente te haz quedado.
                Girando mi disco duro buscando palabras exactas  que descompriman el cariño que hace clic en nuestras almas.</p>
        </div>
        </div>
        </div>
          <div className="col">
          <div className="card" style={{width:'18rem'}}>
        <img src={imagenes} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">POTACIO Encriptemos ilusiones; programemos el camino; Abre la ventana, mientras que mis miedos minimizo.
                Y quemare en este CD para siempre mis palabras para que cada vez que quieras, puedas reproducirlas</p>
        </div>
        </div>
          </div>
          <div className="col">
          <Sum/>
          </div>
        </div>
        </div> 
            
        );
}
export default Principal;