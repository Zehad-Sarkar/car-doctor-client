import React, { useContext, useEffect } from "react";
import CheckoutBannar from "./CheckoutBannar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price, img } = service;

  // /* BookService / checkout */
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    // const amount = form.amount.value;
    // console.log(name, date, email);
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    // console.log(booking);
    fetch("https://car-doctor-server-liard.vercel.app/addbookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service succesfully added");
        }
      });
  };

  return (
    <div>
      <CheckoutBannar></CheckoutBannar>
      <h2 className="mt-8 mb-8 text-2xl font-bold text-center">
        Checkout / Book Service : {title}
      </h2>
      {/* BookService / checkout */}
      <form
        onSubmit={handleCheckout}
        className="p-6 m-4 bg-orange-100 border rounded-md"
      >
        <div className="grid w-3/4 grid-cols-1 gap-3 mx-auto lg:grid-cols-2 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="first name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder=""
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deu Amount</span>
            </label>
            <input
              type="text"
              name="amount"
              defaultValue={"$ " + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="mt-6 form-control">
          <input
            className="btn btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
