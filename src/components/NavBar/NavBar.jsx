import React from 'react';
import './NavBar.css'

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <a href="#">Bienvenido</a>
                <a href="#">Shop</a>
                <a href="#">Contacto</a>
                <a href="#">Soporte</a>
            </ul>
        </div>
    );
}

export default NavBar;