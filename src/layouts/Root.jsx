import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";

const Root = () => {
  return (
    <div className="font-rubik">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
