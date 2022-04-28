import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <>
            <ul className='nav'>
                <a href="#">Bienvenido</a>
                <a href="#">Shop</a>
                <a href="#">Contacto</a>
                <a href="#">Soporte</a>
                <a href=""><CartWidget /></a>
            </ul>

        </>
    );
}

export default NavBar;