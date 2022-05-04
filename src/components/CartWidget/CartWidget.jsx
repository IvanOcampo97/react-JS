import React from "react";
import Imagen from "./carrito.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img src={Imagen} />
    </div>
  );
};

export default CartWidget;
