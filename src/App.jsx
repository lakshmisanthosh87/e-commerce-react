import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import ProductDetails from './components/product/ProductDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
