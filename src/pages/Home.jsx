import { useContext } from 'react'
import { ProductContext } from '../components/context/context'
import ProductCard from '../components/product/ProductCard'

const Home = () => {
  console.log("renddereing");

  const { products } = useContext(ProductContext)
  console.log(products);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <div className=" grid grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((data, index) => (
          <ProductCard key={index} product={data} />
        ))}
      </div>

    </div>
  )
}

export default Home
