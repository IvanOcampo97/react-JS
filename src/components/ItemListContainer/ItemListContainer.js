import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemList  from "../ItemList/ItemList";
import { collection, getDocs, getFirestore, query} from 'firebase/firestore';



function traerProductos(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = query(
    itemCollection
  );
  return getDocs(q)
}

function ItemListContainer() {

  const { categoryId } = useParams();
  
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductos(categoryId)
      .then((snapshot) => {
      setProductos(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id }
    }));
    })
    .catch(
      err => console.log(err)
    );
  }, [categoryId]);
  

  return (
    <>
      <ItemList items={productos} />
    </>
  );
}

export default ItemListContainer;
