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
      <h1>{item?.title}</h1>
        <h2>{item?.price}</h2>
        <Counter onAdd={addHandler}/>

      </div>
    </div>
  );
};

export default ItemDetail