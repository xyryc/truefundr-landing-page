import { Link } from "react-router";
import TrueFundrLogo from "/companyBrandLogo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4 p-2.5">
      <Link to="/">
        <img
          src={TrueFundrLogo}
          alt="company logo"
          className="h-10 object-scale-down"
        />
      </Link>

      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div>
        <Button text={"Login"} destination={"/login"} />
      </div>
    </div>
  );
};

export default Navbar;
