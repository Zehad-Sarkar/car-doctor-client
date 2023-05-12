import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Bannar = () => {
  return (
    <div className="w-full h-[600px] carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img src={banner1} className="w-full rounded-xl" />
        <div className="absolute bottom-0 rounded-xl flex items-center transform  left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className="w-1/2 pl-4 text-white space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="mr-5 btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide4" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img src={banner2} className="w-full rounded-xl" />
        <div className="absolute bottom-0 flex transform -translate-y-1/2 left-5 right-5">
          <div className="text-white ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="mr-5 btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img src={banner3} className="w-full rounded-xl" />
        <div className="absolute bottom-0 flex transform -translate-y-1/2 left-5 right-5">
          <div className="text-white ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="mr-5 btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide2" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img src={banner4} className="w-full rounded-xl" />
        <div className="absolute bottom-0 flex transform -translate-y-1/2 left-5 right-5">
          <div className="text-white ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="mr-5 btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide3" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
