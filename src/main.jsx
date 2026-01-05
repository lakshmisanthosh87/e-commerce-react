import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './components/context/context.jsx'
import CartProvider from './components/context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </ProductProvider>


)
