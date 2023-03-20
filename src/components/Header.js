import './../styles/css/main.css';

function Header() {
    return(
        <header>
            <div className='container'>
                <nav className='navbar' id="navbar">
                    <ul class="nav-links">        
                        <input type="checkbox" id="checkbox_toggle" />    
                        <label for="checkbox_toggle" class="hamburger">&#9776;</label>      
                        <div class="menu">    
                            <li><a className='option' href="#banner">Inicio</a></li>
                            <li><a className='option' href="#sobre-mi">Sobre mi</a></li>
                            <li><a className='option' href="#proyectos">Proyectos</a></li>
                            <li><a className='option' href="#contacto">Contacto</a></li>   
                        </div>    
                    </ul>    
                </nav>
            </div>
        </header>
    )
}  

export default Header;