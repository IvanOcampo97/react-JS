import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemList  from "../ItemList/ItemList";

function traerProductos(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productList = [
      { id: "1", category: "libros", title: "El señor de los anillos", price: "$300" },
      { id: "2", category: "libros", title: "Harry Potter", price: "$400" },
      { id: "3", category: "libros", title: "Crepusculo", price: "$500" },
      { id: "4", category: "libros", title: "El resplandor ", price: "$350" },
    ];
    const productosFiltrados = category ? productList.filter(p => p.category === category) : productList;
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    traerProductos(categoryId).then((res) => {
      setProductos(res);
    });
  }, [categoryId]);

  return (
    <>
      <ItemList items={productos} />
    </>
  );
}

export default ItemListContainer;
