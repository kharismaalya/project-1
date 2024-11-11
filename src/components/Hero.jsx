import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import gedung from "../assets/images/gedung.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen flex items-center"
      id="home"
    >
      {/* Background Image */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${gedung})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bgContent-900/80 to-bgContent-400/50 z-10" />
      {/* <div className="absolute inset-0 bg-bgContent bg-opacity-50 z-10" /> */}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
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
            <div className="text-white">
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
            <h2 className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl">
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
