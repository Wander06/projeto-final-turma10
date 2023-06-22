import { useState } from "react";
import Title from "../../components/title";
import "./Contador.css"

const Contador = () => {
    const[contador, setContador] = useState(0);

    const somando = () =>{
        setContador(contador +1);
        console.log(contador);
    }
    
    const subtraindo = () =>{
        setContador(contador - 1);
        console.log(contador);
    }

    return(
        <>
            <div className="div">
                <h1>Contador</h1>
                <br/>
                <button className="botoes" onClick={somando}>+</button>
                <button className="botoes" onClick={subtraindo}>-</button>
                <Title text={contador}/>
            </div>
        </>
    )
}

export default Contador;