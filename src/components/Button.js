import './../styles/css/main.css';


function Button(props) {
    return(
        <div className="container">
        <button onClick={props.onClick}>
            <div className='button'>
            {props.texto}
            <a href="images/CV_SILVIA_PINO.pdf" target="_blanck"> CURRICULUM</a>
            </div>
        </button>
        </div>
    )
}  

export default Button;


