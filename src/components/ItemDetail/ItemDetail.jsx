import React, { useState } from "react";
import "./ItemDetail.css";
import Counter from "../ItemCount/ItemCount";

function ItemDetail ({ id, title, price }) {
  const [cantidadDeProductos, setCatidadDeProductos] = useState(null);

  function addHandler(quantityToAdd) {
    setCatidadDeProductos(quantityToAdd);
  }
  return (
    <div id={ id?.id } className="ItemDetailCard">
      <div className="imgDetailCard"></div>
      <div className="txtDetailCard">
      <h1>{title}</h1>
        <h2>{price}</h2>
        {/* <Counter onAdd={addHandler}/> */}
      </div>
    </div>
  );
};

export default ItemDetail