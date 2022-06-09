import React from "react";
import  Item  from "../Item/Item";
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


// import React from 'react';
// import Item from '../Item/Item'

// const ItemList = ({ data }) => {
//     return (
//         <div className='itemList'>
//             <div className='row justify-content-evenly'>
//                 {data.map((i) => (<Item item={i} name={i.name} key={i.id} id={i.id} image={i.img} price={i.price}/>))}
//             </div>
//         </div>
//     )
// }

// export default ItemList