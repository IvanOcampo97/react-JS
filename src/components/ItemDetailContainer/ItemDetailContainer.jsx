import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemDetail  from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function traerProductos(id) {
  
  const promesaProductos = new Promise((resolve, reject) => {
    const dataProductos = [
      { id: 1, category:"Libros", title: "Comic 1", price: "$300" },
      { id: 2, category:"Libros", title: "Libro 2", price: "$400" },
      { id: 3, category:"Libros", title: "Libro", price: "$500" },
      { id: 4, category:"Libros", title: "revista ", price: "$350" },
    ];
    
    const item = dataProductos.filter(item => item.id == parseInt(id));
      resolve(item[0]);
  });

  return promesaProductos;

}
function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {

    traerProductos().then((res) => {
      setItemDetail(res);
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
