import React from 'react'
import ProductCard from '../components/product/ProductCard'

const Home = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <div className=" grid grid-cols-3 lg:grid-cols-4 gap-4">
        {product?.map((data, index) => (
          <ProductCard key={index} product={data} />
        ))}
      </div>

    </div>
  )
}

export default Home
