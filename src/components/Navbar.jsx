import { Link } from "react-router";
import TrueFundrLogo from "/companyBrandLogo.png";
import Button from "./Button";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4 p-2.5"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
    >
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
    </motion.div>
  );
};

export default Navbar;
