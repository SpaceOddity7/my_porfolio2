import './../styles/css/main.css';
import React, { useEffect, useState } from 'react'

function Proyectos() {
const [repo, setRepo] = useState([]);
useEffect(() => {

    fetch('http://127.0.0.1:8000/apiproyectos/list')
    .then(response => response.json())

    .then(repo =>
        setRepo(repo))
    .catch(error => console.error(error));
},[]);

    return (
    <div className="card">
        {repo.map(int => {
        return(
            <div className="card-body" key={int.id}>
                <h2 className="card-title">{int.name}</h2>
                <img src={int.imagen} alt={int.name} />
                <a href={int.link} target="_blank" rel="noreferrer noopener">GitHub</a>
            </div>
        )
        })}
    </div>
);
}

export default Proyectos
