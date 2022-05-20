import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemList  from "../ItemList/ItemList";
import { collection, getDocs, getFirestore} from 'firebase/firestore';
function traerProductos(category) {
  const myPromise = new Promise((resolve, reject) => {
        console.log();
    const productList = [
      { id: "1", img:"", category: "libros", title: "El señor de los anillos", price: "$300" },
      { id: "2", img:"", category: "libros", title: "Harry Potter", price: "$400" },
      { id: "3", img:"", category: "comics", title: "Crepusculo", price: "$500" },
      { id: "4", img:"", category: "revistas", title: "El resplandor ", price: "$350" },
    ];

    const productosFiltrados = category ? productList.filter(p => p.category === category) : productList;

      resolve(productosFiltrados);
  });
  return myPromise;
}

function ItemListContainer() {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  getDocs(itemCollection)
  .then(snapshot =>{
    console.log(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id }
   }));
  })
  .catch(
    err => console.log(err)
  );
  // const [productos, setProductos] = useState([]);
  // const { categoryId } = useParams();

  // useEffect(() => {
  //   traerProductos(categoryId).then((res) => {
  //     setProductos(res);
  //   });
  // }, [categoryId]);

  return (
    <>
      <ItemList items={productos} />
    </>
  );
}

export default ItemListContainer;
