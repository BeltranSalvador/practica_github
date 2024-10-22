import React from 'react'; //REACT es para que reconozca 
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
function Home(){
   return(
    <>
    <p>Mi pagina principal</p>
    </>
   )
}
function OtraPagina(){
    return(
        <>
         <p>entrastre a la documentacion</p>
        </>
    )
}
    function SegundaPagina (){
        return(
            <>
            <p>entrastre a la documentacion de ccm</p>
            </>
        )

}
function P_Link(){
    return(
    
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Router>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CALCULADORA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/hola">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/bienvenido">COCOMO</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/usuario">MODELO Delphi</Link>
                    </li>

                </ul>
                </div>
            </div>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hola" element={<OtraPagina/>} />
            <Route path="/bienvenido" element={<SegundaPagina/>} />
            
        </Routes>
    </Router>
     </nav>
)

}
export default P_Link;