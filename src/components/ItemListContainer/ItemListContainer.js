import React, { useEffect, useState } from 'react';
import itemList from '../ItemList/ItemList';

function productos() {
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
            {id: '1', 
            nombre: 'El señor de los anillos',
            precio: '$300'
            },
            {id: '2', 
            nombre: 'Harry Potter',
            precio: '$400'
            },
            {id: '3', 
            nombre: 'Crepusculo',
            precio: '$500'
            },
            {id: '4', 
            nombre: 'El resplandor ',
            precio: '$350'
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
    productos()
    .then(res =>{
        setProductos(res);
    })
}, []);

return (
    <div>
        <itemList items={productos}/>
        {}
    </div>
)
}

export default productos