import React from "react";
import "./ItemDetail.css";

function ItemDetail ({ id, title, price }) {
  return (
    <div id={id} className="ItemDetailCard">
      <div className="imgDetailCard"></div>
      <div className="txtDetailCard">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ItemDetail