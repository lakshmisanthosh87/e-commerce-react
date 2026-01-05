import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    console.log(products, "context");


    useEffect(() => {
        fetchProducts()
    }, [])


    
    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            console.log(res);
            
            setProducts(res.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider