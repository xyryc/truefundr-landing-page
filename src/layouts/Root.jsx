import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="font-rubik">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Root;
