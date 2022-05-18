import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CartContext from '../store/cart-context';

function Cart() {

    const cartCtx = useContext(CartContext);

    return (
        <div>
            {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
            {cartCtx.products.length !== 0 ? 
            <div>
                <p>Precio total: ${cartCtx.getTotalPrice()}</p>
                <button>Terminar compra</button>
            </div> :
            <>
            <h2>No hay productos en el carrito</h2>
            <button>
                <Link to='/'>Ir al inicio</Link>
            </button>
            </>
            }
        </div>
    )

}

export default Cart;