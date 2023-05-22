import { useEffect, useRef, useState } from "react";
import ServicesCard from "./ServicesCard";
import { FaCalendarAlt, FaLocationArrow, FaPhoneSquare } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  useEffect(() => {
    // fetch("https://car-doctor-server-liard.vercel.app/services")
    fetch(
      `https://car-doctor-server-liard.vercel.app/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);

  const handleSearch = (event) => {
    setSearch(searchRef.current.value);
  };
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
        <button
          className="mt-6 font-extrabold btn btn-primary"
          onClick={() => setAsc(!asc)}
        >
          {asc ? "Price: High to low" : "Price: Low to high"}
        </button>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
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
