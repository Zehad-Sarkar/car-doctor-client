import React from "react";
import { FaStar } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  const { title, img, price } = product;
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="text-center card-body">
        <div className="flex justify-center">
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
        </div>
        <h2 className="font-bold text-center">{title}</h2>
        <p className="text-orange-400">${price}</p>
      </div>
     
    </div>
  );
};

export default ProductsCard;
