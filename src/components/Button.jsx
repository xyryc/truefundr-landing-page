import { Link } from "react-router";

const Button = ({ text, destination }) => {
  return (
    <Link
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center whitespace-nowrap px-6 lg:px-8 py-3 duration-300 overflow-hidden font-medium text-white rounded shadow-xl hover:shadow-black/20 transition-all group bg-black"
      to={destination}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-primary via-primary to-cyan-400 group-hover:opacity-100"></span>
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
      <span className="relative">{text}</span>
    </Link>
  );
};

export default Button;
