import React from "react";
import Counter from "../ItemCount/ItemCount";
import "./Item.css";

export const Item = ({ title, price }) => {
  return (
    <div className="itemContainer">
      <div className="itemCard">
        <h1>{title}</h1>
        <h2>{price}</h2>
        <Counter initial={0} stock={5} />
      </div>
    </div>
  );
};
