import { Outlet } from "react-router-dom";
import Footer from "../sharedpages/Footer";
import Navbar from "../sharedpages/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
