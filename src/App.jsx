import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import axios from 'axios'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDetails from './components/product/ProductDetails'

const App = () => {
  

  const [product,setProduct] = useState([])

  useEffect(()=>{
    FetchData()
      
  },[])
  const FetchData = async ()=>{
    try{
      const response = await axios.get("https://dummyjson.com/products")
      console.log(response)
      setProduct(response.data.products)


      // console.log(response)
    }
    catch(error){
      console.log(error)
    }
      

  }
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home product={product}/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App