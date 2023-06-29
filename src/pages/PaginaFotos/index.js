import "./style.css"
import Header from "../../components/header";
import Footer from "../../components/footer";
import saudadesArlanda from "./fotosTurma/WhatsApp Image 2023-06-28 at 23.57.19.jpeg"
import fotoTurma1 from "./fotosTurma/PHOTO-2023-05-09-17-13-35.jpg"
import fotoTurma2 from "./fotosTurma/PHOTO-2023-04-17-16-42-58.jpg"
import fotoTurma3 from "./fotosTurma/WhatsApp Image 2023-06-26 at 16.32.29.jpeg"
import fotoTurma4 from "./fotosTurma/PHOTO-2023-05-08-17-00-25.jpg"
import fotoTurma5 from "./fotosTurma/PHOTO-2023-06-22-18-54-36.jpg"


const PaginaFotos = () =>{
    return(
        <>
            <Header text="Recordações"/>
            <main className="mainFotos">
                <div className="containerFotos1">
                    <img className="fotos" src={fotoTurma1}/>
                    <img className="fotos" src={saudadesArlanda}/>
                    <img className="fotos" src={fotoTurma4}/>
                </div>
                <div className="containerFotos2">
                    <img className="fotos" src={fotoTurma2}/>
                    <img className="fotos" src={fotoTurma3}/>
                    <img className="fotos" src={fotoTurma5}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default PaginaFotos;