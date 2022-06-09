import React, { useContext } from "react";
import "./ItemDetail.css";
import Counter from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

function ItemDetail ({ item }) {
  const cartCtx = useContext(CartContext);
  
  function addHandler(quantityToAdd) {
    cartCtx.addProduct({quantity: quantityToAdd, ...item});
  }
  
  return (
    <div id={ item?.id } className="ItemDetailCard">
      <div className="imgDetailCard">
      <div className="txtDetailCard">
        <h1>{item?.title}</h1>
        <h2>{item?.price}</h2>
      </div>
        <div>
        <Counter initial={0} stock={5} onAdd={addHandler} />
          { cartCtx.products.lenght &&
            <button onClick={() => console.log(cartCtx)}>
              <Link to='/cart'>
                Terminar Compra ({cartCtx.getCartQuantity() } items)
                </Link>
            </button>
          }
          <button onClick={() => console.log(cartCtx.products)}> Imprimir carrito</button>
          <button onClick={() => cartCtx.removeProduct(item.id)}> Remover producto</button>
          <button onClick={() => cartCtx.clear()}> Clear</button>
          <button onClick={() => console.log(cartCtx.isInCart(item.id))}> Is in Cart</button>
          <button onClick={() => console.log(cartCtx.getCartQuantity())}> Quantity</button>
        </div>
        </div>

    </div>
  );
};

export default ItemDetail
