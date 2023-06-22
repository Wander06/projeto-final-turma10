
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Hobby from "./pages/Hobby";
import Curiosidades from "./pages/Curiosidades";
import Contador from "./pages/Contador/Contador";
import Pokemon from "./pages/Pokemon/PokemonApi";

function Rotas(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} exact/>  
                <Route path="/hobby" element={<Hobby/>} exact/>
                <Route path="/curiosidades" element={<Curiosidades/>} exact/>
                <Route path="/contador" element={<Contador/>} exact/>
                <Route path="/pokemon" element={<Pokemon/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;