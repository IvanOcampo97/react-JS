import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';


function traerProductos(){
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
            {id: '1', 
            title: 'El señor de los anillos',
            price: '$300'
            },
            {id: '2', 
            title: 'Harry Potter',
            price: '$400'
            },
            {id: '3', 
            title: 'Crepusculo',
            price: '$500'
            },
            {id: '4', 
            title: 'El resplandor ',
            price: '$350'
            }
        ];
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });
    return myPromise;
}

function ItemListContainer ({ greeting }){

const [productos, setProductos] = useState([]);

useEffect(() =>{
    traerProductos()
    .then(res =>{
        setProductos(res);
    })
}, []);

return (
    <>
        <ItemList items={productos}/>
    </>
)
}

export default ItemListContainer