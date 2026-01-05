import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
const ProductDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);



  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!data) {
    return <p className="text-center mt-10">Loading...</p>
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6">

        {/* Images */}
        <div>
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-80 object-contain bg-gray-100 rounded-xl"
          />

          <div className="flex gap-2 mt-4 overflow-x-auto">
            {data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-20 h-20 object-contain bg-gray-100 rounded-lg border"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">

          <h1 className="text-3xl font-bold text-gray-900">
            {data.title}
          </h1>

          <p className="text-gray-500">
            Brand: <span className="font-medium">{data.brand}</span>
          </p>

          <p className="text-gray-500">
            Category: <span className="font-medium capitalize">{data.category}</span>
          </p>

          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              {data.rating} ★
            </span>
            <span className="text-gray-500">({data.stock} in stock)</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">
              ₹{data.price}
            </span>
            <span className="text-sm text-green-600 font-semibold">
              {data.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {data.description}
          </p>

          <div className="flex gap-4 pt-4">

            <button onClick={() => { addToCart(data), setAdded(true); }} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Add to Cart
            </button>


            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>
          {added && (
            <p className="text-green-600 font-medium">
              ✅ Product added to cart successfully
            </p>
          )}


        </div>

      </div>
    </div>
  )
}

export default ProductDetails
