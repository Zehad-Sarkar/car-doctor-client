import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { FaCalendarAlt, FaLocationArrow, FaPhoneSquare } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-orange-500">Services</h2>
        <h2 className="text-3xl font-bold"> Our Services Area </h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      
      {/* services card map */}
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>

      {/* card down step */}
      <div className="block w-1/2 mx-auto mt-4 mb-4 text-center">
        <button className=" btn-outline btn-error btn">More Services</button>
      </div>
      <div className="bg-[black] text-white grid grid-cols-3 p-4 w-9/12 mx-auto rounded-xl mb-12 mt-12">
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <p>
            We are opened Monday - Friday <br />
            <span className="text-xl font-bold">07:00 AM - 09:00 PM</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneSquare />
          <p>
            Have a question <br />
            <span className="text-xl font-bold">+2546 251 2658</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationArrow />
          <p>
            Need a repair? our address
            <br />
            <span className="text-xl font-bold">Liza Street, New York</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
