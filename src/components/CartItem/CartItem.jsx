import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Bubble from "../Bubble/Bubble";

function CartItem ({ item }){
    const cartCtx = useContext(CartContext);

    return (
        <>
            <div>
                <p>{item?.title}</p>
                <p>${item?.price}</p>
            </div>
            <div>
                <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>X</Bubble>
            </div>
            <div>
                <Bubble>{item?.quantity}</Bubble>
            </div>
        </>
    )
}

export default CartItem;