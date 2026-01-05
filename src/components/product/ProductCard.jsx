import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 
                    hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Image */}
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="inline-flex items-center bg-green-600 text-white 
                        text-xs px-2 py-1 rounded-full">
          {product.rating} ★
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{product.price + 500}
          </span>
          <span className="text-sm text-green-600 font-semibold">
            20% OFF
          </span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="bg-blue-600 text-white text-sm py-2 rounded-xl
                             hover:bg-blue-700 transition font-semibold">
            Add to Cart
          </button>

          <Link to={`/product/${product.id}`}>
            <button className="w-full border border-blue-600 text-blue-600 
                               text-sm py-2 rounded-xl font-semibold
                               hover:bg-blue-50 transition">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
