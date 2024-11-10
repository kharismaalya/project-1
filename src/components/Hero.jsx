import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import gedung from "../assets/images/gedung.jpg";

import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      // style={{
      //   backgroundImage: `url(${gedung})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   // opacity: 0.5, // Atur transparansi di sini
      // }}
      // className=" w-screen flex justify-left items-left bg-bgContent mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      className="relative w-full min-h-screen flex items-center bg-blue-200 hero-bg-gradient px-4 sm:px-6 lg:px-8"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-20">
        <div className="space-y-8 lg:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
              WELCOME TO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-2"
          >
            <div className="text-primaryText">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                PT. JARING DATA
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mt-2">
                NUSANTARA
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-secondaryText text-sm sm:text-base lg:text-lg max-w-2xl">
              "Connected Business, Smart Solution. CLEON by JDN - Your Digital
              Partner."
            </h2>
          </motion.div>
        </div>
      </div>

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
