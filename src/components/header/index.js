import "./style.css";
import { Link } from "react-router-dom"

const Header = (props) => {
    return(
        <>
            <header className="cabecalho">
                <h1 className="tituloCabecalho">{props.text}</h1>
                <div className="containerLinks">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/pokemon">Pokémon</Link>
                    <Link className="links" to="/paginaFotos">Recordações</Link>
                </div>
            </header>
        </>
    )
}

export default Header;