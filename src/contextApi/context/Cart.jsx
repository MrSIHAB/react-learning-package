import { createContext, useState } from "react";


export const CartContext = createContext(null);

export const CartProvider =(prof)=>{
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={{items, setItems}}>
            {prof.children}
        </CartContext.Provider>
    )
}