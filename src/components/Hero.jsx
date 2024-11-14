import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import peoplehome from "../assets/images/peoplehome.png";
// import gedung from "../assets/images/gedung.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen flex items-center"
      id="home"
    >
      {/* Background Image */}
      {/* <div
        className="hero-background"
        style={{
          backgroundImage: `url(${gedung})`,
        }}
      /> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-white z-10" />
      {/* <div className="absolute inset-0 bg-bgContent bg-opacity-50 z-10" /> */}

      {/* Content */}
      <div className="flex relative z-20 max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 w-32 space-y- lg:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-textJudul text-2xl sm:text-3xl lg:text-3xl font-bold">
              WELCOME TO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-2"
          >
            <div className="text-textJudul">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold tracking-wide">
                PT. JARING DATA
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold tracking-wide mt-2">
                NUSANTARA
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-textJudul text-sm sm:text-base lg:text-lg max-w-1xl">
              "Connected Business, Smart Solution. CLEON by JDN - Your Digital
              Partner."
            </h2>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={peoplehome} alt="Building" className="hero-image" />
        </motion.div>

        {/* <div className="flex-1 w-64 space-y-8 lg:space-y-12">
          <p>afasdf</p>
        </div> */}
      </div>

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
