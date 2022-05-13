import { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addProduct: () => {}
});

export const CartContextProvider = ({ children }) =>{
    const [productList, setProductList] = useState([]);
    
    const addProduct = (product) => {
        setProductList([product, ...productList]);
    }

    return (
        <CartContext.Provider value = {{
            products : productList,
            addProduct: addProduct
        }}>
            {children}
        </ CartContext.Provider>
    )
}