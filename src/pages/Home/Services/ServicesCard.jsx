import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  // console.log(service);
  const { _id, title, img, price } = service;
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p className="text-orange-400">Price: ${price}</p> */}
        <div className="flex items-center card-actions">
          <p className="font-medium text-orange-400">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
