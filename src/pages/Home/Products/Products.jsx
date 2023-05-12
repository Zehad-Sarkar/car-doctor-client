import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold text-orange-500">Popular Products</h1>
        <h2 className="text-4xl font-bold"> Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
      <div className="block w-1/2 mx-auto mt-4 mb-4 text-center">
        <button className=" btn-outline btn-error btn">More Products</button>
      </div>
    </div>
  );
};

export default Products;
