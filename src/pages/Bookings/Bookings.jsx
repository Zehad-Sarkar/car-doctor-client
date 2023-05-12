import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingTableRow from "./BookingTableRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/getbookings?email=${user?.email}`;
  // console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  //delete event
  const handleDelete = (id) => {
    const procced = confirm("are you sure delete?");
    if (procced) {
      fetch(`http://localhost:5000/deleteBookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("deleted succesfull");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  //Confirm event
  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/updateBooking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updating = bookings.find((booking) => booking._id === id);
          updating.status = "confirm";
          const newBookings = [updating, ...remaining];
          setBookings(newBookings)
        }
      });
  };

  return (
    <div>
      <h2 className="mt-8 mb-8 font-bold text-center">
        Yours Bookings: {bookings.length}
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingTableRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;