import {useState, useEffect} from "react";
import axios from "axios";
import "./index.css"


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
            <h1>Lista de pokemon</h1>
            <ul>
                {pokemon.map(pokemon => (
                    <li className="listaPokemon">
                        <h3>{pokemon.name}</h3>
                        <div className="divPokemon">
                        <img className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} />
                        </div>                    
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon; 