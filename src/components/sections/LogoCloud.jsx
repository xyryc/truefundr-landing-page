import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LogoCloud = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const logos = Array.from(
    { length: 12 },
    (_, i) =>
      `https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-${
        i + 1
      }.png`
  );

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" ref={ref}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={controls}
            variants={logoVariants}
          >
            <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl lg:leading-tight">
              <span className="text-[#2C5ADB]">1</span> team.
              <br />
              <span className="text-[#2C5ADB]">6+</span> years.
              <br />
              <span className="text-[#2C5ADB]">300+</span> projects.
              <br />
            </h2>
            <p className="mt-6 text-base text-[#1F2937]">
              We provide personalized loan solutions tailored to your needs.
              With years of experience and thousands of successful loans, we
              help you achieve your financial goals with ease and trust.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-3 xl:col-span-4"
            initial="hidden"
            animate={controls}
            variants={logoVariants}
          >
            <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={logoVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <img
                    className="object-contain w-full h-8 mx-auto"
                    src={logo}
                    alt={`Logo ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
