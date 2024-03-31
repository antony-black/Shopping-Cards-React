import { useSelector } from "react-redux";
import CartTile from "../cart-tile";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const getTotal = () => {
    return cart.reduce((total, cur) => total + cur.price, 0).toFixed(2);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-red-400 rounded-2xl w-96 p-10 fixed top-24 right-10">
        <h3 className="font-extrabold font-sans text-2xl text-gray-700 mb-3">
          CONGRATULATIONS:
        </h3>
        <p className="text-red-700 font-semibold">{`You have choosen ${cart.length} items.`}</p>
        <p className="text-red-700 font-semibold">{`Total: ${getTotal()}$.`}</p>
      </div>
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
