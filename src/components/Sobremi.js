import './../styles/css/main.css';

function Aboutme() {
    return(
        <section className="section sectionAboutMe">
            <div className="container">
                <div className="textoimagen">
                    <div className="textoprinp">
                    <h1>SOBRE MI</h1>
                    <p>¡Hola! Soy Silvia, he trabajado en la industria de los medios impresos durante gran parte de mi carrera, donde he desarrollado habilidades en edición y producción de contenidos. Ahora estoy haciendo un bootcamp de desarrollo fullstack, donde he adquirido conocimientos en diferentes lenguajes de programación, frameworks, bases de datos y metodologías ágiles. Estoy emocionada por esta nueva etapa en mi carrera y espero combinar mis habilidades y experiencia para crear soluciones digitales efectivas y atractivas.</p>
                    </div>
                    <div className="img_sobremi">
                        <img src='./images/yobn.jpeg' alt='Imagen-Silvia'></img>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}  

export default Aboutme;