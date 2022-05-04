import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((product) => {
        return (
          <Item key={product.id} title={product.title} price={product.price} />
          // console.log(product)
        );
      })}
    </div>
  );
};
