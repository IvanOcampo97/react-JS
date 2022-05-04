import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function traerProductos() {
  const promesaProductos = new Promise((resolve) => {
    const dataProductos = [
      { id: "1", title: "El señor de los anillos", price: "$300" },
      { id: "2", title: "Harry Potter", price: "$400" },
      { id: "3", title: "Crepusculo", price: "$500" },
      { id: "4", title: "El resplandor ", price: "$350" },
    ];
    setTimeout(() => {
      resolve(dataProductos);
    }, 2000);
  });
  return promesaProductos;
}
function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((res) => {
        setItemDetail(res);
      })
      .catch((error) => {
        console.log("Se ha producido un error", error);
      });
  });

  return (
    <div className="detailContainer">
      <div className="detailContainerCards">
        {Detail.map((item) => {
          return (
            <ItemDetail key={item.id} title={item.title} price={item.price} />
          );
        })}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
