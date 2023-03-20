import './../styles/css/main.css';

function Aboutme() {
    return(
        <section className="section sectionAboutMe">
            <div className="container">
                <h1 className="titulo_principal">PORFOLIO</h1>
                <div className="textoimagen">
                    <div className="textoprinp">
                    <h3>SOBRE MI</h3>
                        <p> Destinada a reinventarme y descubir mi pasión por la programación. Este camino me permite dar lo mejor de mí sin ponerme limites. Siempre dispuesta a seguir ampliando conocimientos.</p><p>Destined to reinvent myself and discover my passion for programming. This path allows me to give the best of me without limiting myself. Always ready to continue to expand my knowledge</p>
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