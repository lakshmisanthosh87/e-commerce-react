import { use, useEffect } from "react";
import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    })


    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



    const addToCart = ((product) => {
        setCart((cart) => [...cart, product])
    })

    const deleteCart = ((id) => {
        setCart((product) => product.filter(item => item?.id !== id))

    })

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider