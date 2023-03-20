import './../styles/css/main.css';


function Card () {
    return (
        <div className="card">
        <img src="images/tanjiro.png" alt="tanjiro" />
        <div className="card-body">
            <h5 className="card-title">TANJIRO</h5>
            <p className="card-text">Web temática anime realizada con Boostrap.</p>
            <button className="btn btn-primary">ver proyecto</button>
        </div>
        </div>
        );
}

export default Card;