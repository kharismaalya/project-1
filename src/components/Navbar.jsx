import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "About Us", href: "/#About Us", ariaLabel: "About Us" },
  { label: "Service", href: "/#Service", ariaLabel: "Service" },
  { label: "Feedback", href: "/#feedback", ariaLabel: "Feedback" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled past viewport height
      const isScrolled = window.scrollY > window.innerHeight;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-20 flex flex-col justify-center items-center fixed z-40 transition-all duration-300 ${
        scrolled
          ? "bg-textJudul shadow-lg" // Scrolled state
          : "bg-white lg:bg-white shadow-sm" // Initial state
      }`}
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <TailcastLogo />
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className={`lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2 ${
                  scrolled ? "text-white" : "text-dark"
                }`}
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <div
          className={`lg:hidden flex flex-col px-2 py-3 border-solid border rounded-md cursor-pointer ${
            scrolled
              ? "border-gray-300 hover:bg-textJudul"
              : "border-gray-600 hover:bg-bgDark2"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-5 h-0.5 mb-1 ${
              scrolled ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 mb-1 ${
              scrolled ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 ${scrolled ? "bg-white" : "bg-gray-500"}`}
          ></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className={`flex flex-col mt-16 lg:hidden absolute top-4 left-0 w-full 
                items-center gap-10 pb-10 border-y border-solid pt-10 ${
                  scrolled
                    ? "bg-textJudul border-white"
                    : "bg-bgDark1 border-bgDark3"
                }`}
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
