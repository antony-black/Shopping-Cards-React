import { useSelector } from "react-redux";
import CartTile from "../cart-tile";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <div className="flex justify-center">
      {cart?.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-start p-3 gap-2">
              {cart.map((itemCart) => (
                <CartTile key={itemCart.id} itemCart={itemCart} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center flex-col">
          <h1 className="text-red-700 font-extrabold text-xl mb-2.5">
            Your cart is empty...
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 border-2 rounded-lg font-bold p-4 text-white">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
