import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";

const Cart = () => {
  const { cart, deleteCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-xl">Cart is empty 🛒</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item?.id}
            className="flex items-center gap-6 p-4 border rounded-xl"
          >
            <img
              src={item?.thumbnail}
              className="w-24 h-24 object-contain"
            />

            <div className="flex-1">
              <h2 className="font-semibold">{item?.title}</h2>
              <p className="text-gray-600">₹{item?.price}</p>
            </div>

            <button
              onClick={() => deleteCart(item?.id)}
              className="text-red-600 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
