import './../styles/css/main.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false
}

const kiaServices = [ 
    {   
        subtitle: 'TANJIRO',
        content: 'Pagina con tematica anime, realizada con Boostrap.',
        img: '../images/tanjiro.png',
        movilImg: '../images/tanjiro.png',

    },
    {
        subtitle: 'NAVIDAD',
        content: 'Pagina tematica navideña para enviar cartas a Papa Noel. realizada con REACT JS y SASS',
        img: '../images/navi.png',
        movilImg: '../images/navi.png',
    
    },
    {
        subtitle: 'FORMULARIO MASER',
        content: 'Dos formularios de registro validados, el primero con HTML, el segundo con JS.Realizados con HTML5, JavaScript y CSS3',
        img: '../images/maser.png',
        movilImg: '../images/maser.png',
        
    },
    {
        subtitle: 'REPRODUCTOR AUDIO',
        content: 'Reproductor de audio con barra de progreso e imagen, se pausa, avanza y retrocede.Realizado con HTML5, CSS3 y JavaScript ',
        img: '../images/audio.png',
        movilImg: '../images/audio.png',
        
    },
    {
        subtitle: 'REGISTRO ENTIDADES',
        content: 'Registro de entidades, se pueden agregar, editar y eliminar usuarios, realizado con Symfony/PHP',
        img: '../images/entidades.png',
        movilImg: '../images/entidades.png',
        
    }
]

function Services() {
    return( 
        <section id='servicios' className='section sectionServices'>
            <div className='container'>
                <Slider {...sliderSettings} className='sliderServices'>
                    {kiaServices.map((kiaServices, index) => (
                        <div key={index} className='itemSlider'>               
                            <picture>
                                <source alt={kiaServices.subtitle} srcSet={kiaServices.movilImg} media="(max-width:767px)"/>
                                <img alt={kiaServices.subtitle} src={kiaServices.img} width="200px"/>                            
                            </picture>
                            <div className='caption'>
                                <h3>{kiaServices.subtitle}</h3>
                                <p>{kiaServices.content}</p>
                            </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    )
} 


export default Services;