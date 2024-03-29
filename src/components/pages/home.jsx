import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        if (data) {
          setProducts(data);
        }
      } catch (e) {
        console.log(`Error!!! ${e}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayLoading = () => {
    return (
      <div className="min-h-srcreen w-full flex justify-center items-center">
        <Circles
          height={"120"}
          width={"120"}
          color="rgb(127,29,29)"
          visible={true}
        />
      </div>
    );
  };

  const renderProducts = () => {
    return (
      <div className="min-h-[80vh] grid sm:gridcols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-3">
        {products?.length
          ? products.map((productItem) => (
              <ProductTile key={productItem.id} product={productItem} />
            ))
          : null}
      </div>
    );
  };

  return <div>{isLoading ? displayLoading() : renderProducts()}</div>;
}
