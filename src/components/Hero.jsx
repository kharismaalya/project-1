import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import peoplehome from "../assets/images/peoplehome.png";

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
      <div className="absolute inset-0 bg-textJudul z-10" />
      {/* <div className="absolute inset-0 bg-bgContent bg-opacity-50 z-10" /> */}

      {/* Content */}
      <div className="flex relative z-20 max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className=" mt-32 pt-2 pl-8 flex-1 w-32 space-y- lg:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold">
              WELCOME TO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-2"
          >
            <div className="text-white">
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
            <h2 className="text-white text-sm sm:text-base lg:text-lg max-w-1xl">
              "Connected Business, Smart Solution. CLEON by JDN - Your Digital
              Partner."
            </h2>
          </motion.div>

          {/* Add the Work Inquiry box here */}
          <button
            type="button"
            class="gap-3 text-dark bg-[#DEE2E6] hover:bg-[#719bff]/90 focus:ring-4 focus:ring-[#4773fd]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
          >
            <svg
              className="w-6 h-6"
              fill="FFFFFF"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                fill="black"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                fill="black"
              ></path>
            </svg>
            Work Inquiry from JDN
          </button>
          {/* <div className="inquiry-box">
            <div className="inquiry-icon">
              <svg
                className="w-6 h-6"
                fill="FFFFFF"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <span className="inquiry-text"> Work Inquiry from JDN</span>
          </div> */}
        </div>

        {/* Right Image */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={peoplehome.src}
            alt="peoplehome"
            className="w-[90%] h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
