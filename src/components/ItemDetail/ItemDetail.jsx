import React, { useState } from "react";
import "./ItemDetail.css";
import Counter from "../ItemCount/ItemCount";

function ItemDetail ({ item }) {
  const [cantidadDeProductos, setCatidadDeProductos] = useState(null);

  function addHandler(quantityToAdd) {
    setCatidadDeProductos(quantityToAdd);
  }
  return (
    <div id={ item?.id } className="ItemDetailCard">
      <div className="imgDetailCard"></div>
      <div className="txtDetailCard">
        <h2>{ item?.title }</h2>
        <p>{ item?.price }</p>
        <Counter onAdd={addHandler}/>
      </div>
    </div>
  );
};

export default ItemDetail