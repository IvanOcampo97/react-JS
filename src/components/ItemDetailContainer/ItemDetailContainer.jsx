import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemDetail  from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function traerProductos(id) {
  const promesaProductos = new Promise((resolve) => {
    const dataProductos = [
      { id: 1, title: "El señor de los anillos", price: "$300" },
      { id: 2, title: "Harry Potter", price: "$400" },
      { id: 3, title: "Crepusculo", price: "$500" },
      { id: 4, title: "El resplandor ", price: "$350" },
    ];
    const item = dataProductos.filter( item => item.id === id);
      resolve(item[0]);
  });
  return promesaProductos;
}
function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    traerProductos(id)
      .then((res) => {
        setItemDetail(res);
      })
      .catch((error) => {
        console.log("Se ha producido un error", error);
      });
  }, [id]);

  return (
    <div className="detailContainer">
      <div className="detailContainerCards">
      
            <ItemDetail item={Detail}/>

      </div>
    </div>
  );
}

export default ItemDetailContainer;
