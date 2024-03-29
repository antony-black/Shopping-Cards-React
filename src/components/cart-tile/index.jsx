import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart.slice";

export default function CartTile({ itemCart, handleRemoveFromCart }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(itemCart.id));
  }
  return (
    <div className="flex justify-center items-center bg-red-600 rounded-xl">
      <div className="flex p-3">
        <img className="rounded-lg" src={itemCart.image} alt="image" />
      </div>
      <div className="ml-10 self-start space-y-5 p-4">
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {itemCart.title}
        </h1>
        <p className="text-white font-extrabold">{itemCart.price}</p>
        <button
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 min-w-max"
          onClick={handleRemoveFromCart}
        >
          Remove from cart
        </button>
      </div>
      <div className="flex items-center justify-center w-full mt-5"></div>
    </div>
  );
}
