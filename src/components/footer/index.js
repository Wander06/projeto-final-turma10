import "./style.css";
import fotoInstagram from "../../pages/imagens/fotoInstagram.png";
import fotoLinkedin from "../../pages/imagens/fotoLinkedin.png";
import fotoGithub from "../../pages/imagens/fotoGithub.png"

const Footer = () => {
    return (
        <>
            <hr/>
            <footer className="rodape">
                <h4>Minhas redes sociais:</h4>
                <a target="_blank" href="https://instagram.com/wander_silva11?igshid=YmMyMTA2M2Y=">
                    <img className="icones" src={fotoInstagram} alt="iconeDoInstagram" />
                </a>
                <a target="_blank" href="https://linkedin.com/in/wanderson-pereira-da-silva-685258271">
                    <img className="icones" src={fotoLinkedin} alt="iconeDoLinkedin" />
                </a>
                <a target="_blank" href="https://github.com/Wander06">
                    <img className="icones" src={fotoGithub} alt="iconeGithub" />
                </a>
                <p className="assinatura">By Wander</p >
            </footer>
        </>
    )
}

export default Footer;