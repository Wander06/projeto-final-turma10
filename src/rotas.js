
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Pokemon from "./pages/Pokemon/PokemonApi";
import PaginaFotos from "./pages/PaginaFotos";

function Rotas(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} exact/>  
                <Route path="/pokemon" element={<Pokemon/>} exact/>
                <Route path='/paginaFotos' element={<PaginaFotos/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;