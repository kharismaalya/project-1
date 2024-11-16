import { motion } from "framer-motion";

// import feature1 from "../assets/images/feature1.jpg";
// import feature2 from "../assets/images/feature2.jpg";
// import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import aboutus1 from "../assets/images/aboutus1.jpg";
import aboutus2 from "../assets/images/aboutus2.jpg";
import aboutus3 from "../assets/images/aboutus3.jpg";
import aboutus4 from "../assets/images/aboutus4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section className="w-full bg-grey2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={aboutus1.src}
                  alt="aboutus1 image 1"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="aboutus1 image 1"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={aboutus2.src}
                  alt="aboutus2 image 2"
                  className=" rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="aboutus2 image 2"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={aboutus3.src}
                  alt="aboutus3 image 3"
                  className="rounded-xl  main-border-gray"
                  aria-label="aboutus3 image 3"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={aboutus4.src}
                  alt="aboutus4 image 4"
                  className="rounded-xl  main-border-gray"
                  aria-label="aboutus4 image 4"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">About Us</span>
              <h2 className="mt-6 mb-8 text-dark text-4xl lg:text-5xl block-big-title">
                JDNusantara
              </h2>
              <p className="text-justify text-textJudul leading-loose">
                Penyedia layanan internet yang inovatif,........................
              </p>

              <p className="text-justify text-textJudul leading-loose">
                Produk unggulan kami, "CLEON" ...............
              </p>

              <p className="text-justify mb-10 text-textJudul leading-loose">
                Bersama kami, nikmati kemudahan akses internet yang handal dan
                terjangkau, di mana pun Anda berada!
              </p>

              <ul className="mb-6 text-textJudul">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Tanpa perangkat mahal</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Cocok diberbagai tempat</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Model kemitraan bagi hasil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
