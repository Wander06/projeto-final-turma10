import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import fotoTurma from "../PaginaFotos/fotosTurma/PHOTO-2023-04-11-16-43-04.jpg"

const Inicio = () => {

    return(
        <>
            <main className="home">
                <Header text="Projeto final Turma 10"/>
                    <div className="containerImg">
                        <h2>Minha foto favorita com a turma toda hehehe</h2>
                        <img className="fotoTurma" src={fotoTurma}/>
                    </div>
                <Footer/>
            </main>
        </>
    )
}

export default Inicio;