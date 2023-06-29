import {useState, useEffect} from "react";
import axios from "axios";
import "./index.css"
import pokebola from "../imagens/pokebola-go.png"
import Footer from "../../components/footer";
import { Link } from "react-router-dom";


const Pokemon = () => {
    const[pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(
            "https://pokeapi.co/api/v2/pokemon"
            )
        .then(response => {
            setPokemon(response.data.results);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);

    return(
        <div>
            <header id="cabecalhoPoke">
                <img id="pokebola1" src={pokebola}></img>
                <h1 id="tituloPokemon" >Pokémon</h1>
                <img id="pokebola2" src={pokebola}></img>
            </header>
            <div className="containerPokemonLinks">
                    <Link className="linksPokemon" to="/">Home</Link>
                    <Link className="linksPokemon" to="/pokemon">Pokémon</Link>
                    <Link className="linksPokemon" to="/paginaFotos">Recordações</Link>
                </div>
            <div className="container">
                <h1>
                    
                </h1>
                <div className="containerCards">
                    {pokemon.map(pokemon => (
                        <div className="cardsPokemon">
                            <h3 className="nomePokemon">{pokemon.name}</h3>
                            <div className="divPokemon">
                            <img className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} />
                            </div>                    
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
     
    )
}

export default Pokemon; 