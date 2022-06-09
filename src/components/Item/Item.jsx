import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import "../ItemDetailContainer/ItemDetailContainer"
import Bubble from "../Bubble/Bubble";

function Item ({ id, title, price }) {
  return (
    <div className="itemContainer">
      <div className="itemCard">
        <h3>{title}</h3>
        <h4>{price}</h4>
        <Link to={ "/item/" + id }>
          <button>
            <span>Ver Detalle</span>
          </button>
        </Link>
        <div className="bubble">
          <Bubble>
            <a class="fancy" href="#">
              <span class="top-key"></span>
              <span class="text">Agregar al carrito</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </a>
          </Bubble>
        </div>

      </div>
    </div>
  );
};

export default Item;
