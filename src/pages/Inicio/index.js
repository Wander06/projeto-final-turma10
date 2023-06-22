import Title from "../../components/title"
import { Link } from "react-router-dom"

const Inicio = () => {
    const clicar = () =>{
        alert("Olá eu sou um evento")
    }

    return(
        <>
            <Title text="Opa, aqui é o Home" />
            <button onClick={clicar} >Clica</button>
            <br/>
            <Link to="/hobby" >Hobbyes</Link>
            <br/>
            <Link to="/curiosidades">Curiosidades</Link>
            <br/>
            <Link to="/contador">Contador</Link>
            <br/>
            <Link to="/pokemon">Pokemon</Link>
        </>
    )
}

export default Inicio;