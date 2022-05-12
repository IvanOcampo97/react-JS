import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

function ItemList  ({ items }) {
  return (
    <div className="itemList">
      {items.map((product) => {
        return (
          <Item key={product.id} title={product.title} price={product.price} id={product.id} />
          // console.log(product)
        );
      })}
    </div>
  );
};

export default ItemList