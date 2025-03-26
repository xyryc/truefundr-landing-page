import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Button from "../Button";

const Hero = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="bg-gradient-to-r from-white to-blue-200">
      <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden py-16 px-10">
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-[600px]"
        >
          <h2 className="text-5xl font-bold text-[#111827] mb-6">
            Your Financial Journey{" "}
            <span className="text-[#2C5ADB]">Starts Here</span>
          </h2>
          <p className="text-xl mb-8 text-[#1F2937]">
            Get personalized loan solutions with competitive rates and flexible
            terms tailored to your needs.
          </p>
          <div className="flex gap-4 mb-8">
            <Button text={"Apply Now"} />

            <button className="px-6 py-3 rounded-lg border font-semibold transition-all duration-300 ease-in-out transform flex items-center gap-2 cursor-pointer">
              Contact
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-white -ml-2 cursor-pointer"
              />
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full border-2 border-white -ml-2 cursor-pointer"
              />
            </div>
            <p className="text-sm text-primary-700">
              Join <span className="font-bold">10,000+</span> satisfied
              customers
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full md:w-[500px] h-[400px]"
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute top-10 right-0 bg-white p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-primary-200 w-[280px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-primary-800">Consolidation Loan</h3>
              <svg
                className="w-8 h-8 text-primary-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Amount</p>
              <p className="text-xl font-bold">$25,000</p>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Rate</p>
              <p className="text-xl font-bold">5.9% APR</p>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Term</p>
              <p className="text-xl font-bold">60 months</p>
            </div>
            <button className="w-full py-2 rounded-lg text-white font-medium transition-all duration-300">
              View Details
            </button>
          </div>

          <div className="absolute bottom-0 left-0 bg-white p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border w-[280px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Business Loan</h3>
              <svg
                className="w-8 h-8 text-primary-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9.3V4H14.7L12 1.3L9.3 4H5V9.3L1.3 12L5 14.7V20H9.3L12 22.7L14.7 20H20V14.7L22.7 12L19 9.3ZM10 17L6 13L7.4 11.6L10 14.2L16.6 7.6L18 9L10 17Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Amount</p>
              <p className="text-xl font-bold">$450,000</p>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Rate</p>
              <p className="text-xl font-bold">3.2% APR</p>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">Term</p>
              <p className="text-xl font-bold">30 years</p>
            </div>
            <button className="w-full py-2 rounded-lg text-white font-medium transition-all duration-300">
              View Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
