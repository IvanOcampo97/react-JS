import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Bubble from "../Bubble/Bubble";
import "./CartItem.css";

function CartItem ({ item }){
    const cartCtx = useContext(CartContext);
    return (
        <div>
            <div>
            <p>{ item?.title}</p>
            </div>

            <div className="bubble-remove">
                <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>X</Bubble>
            </div>
            <div className="bubble-cantidad">
                <Bubble>{item?.quantity}</Bubble>
            </div>
        </div>
    )
}

export default CartItem;