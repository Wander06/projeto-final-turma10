import {useState, useEffect} from "react";
import axios from "axios";
import "./index.css"
import pokebola from "../imagens/pokebola-go.png"


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
                <h1 id="tituloPokemon" >Pokémon</h1>
                <img id="pokebola1" src={pokebola}></img>
                <img id="pokebola2" src={pokebola}></img>
            </header>
            <div id="secao">
                <ul>
                    {pokemon.map(pokemon => (
                        <li className="listaPokemon">
                            <h3 className="nomePokemon">{pokemon.name}</h3>
                            <div className="divPokemon">
                            <img className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} />
                            </div>                    
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Pokemon; 