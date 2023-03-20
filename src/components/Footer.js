import './../styles/css/main.css';
import {FaLinkedin} from "react-icons/fa";
function Footer() {
    return(
        <footer className='footer'>
            <div className='container'>
                <p>&copy; Silvi-Dev 2023 - Todos los derechos reservados.</p>
                <a className="logoLinkedin" href="https://www.linkedin.com/in/silvia-pino-6b484a260/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}  

export default Footer;