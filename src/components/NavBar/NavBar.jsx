import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <ul className="nav">
        <Link to={'/'}>Bienvenido</Link>
        <li><NavLink to={'/category/libros'}>Libros</NavLink></li>
        <li><NavLink to={'/category/comics'}>Comics</NavLink></li>
        <li><NavLink to={'/category/revistas'}>Revistas</NavLink></li>
        <a href="">
          <CartWidget />
        </a>
      </ul>
    </>
  );
}

export default NavBar;
