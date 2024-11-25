import { useState } from "react";
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = {
  beginner: [
    "Basic data visualization",
    "5 team members",
    "Basic analytics",
    "24/7 support",
    "1 project",
  ],
  standard: [
    "Advanced visualization",
    "10 team members",
    "Full analytics suite",
    "Priority support",
    "5 projects",
  ],
  premium: [
    "Custom solutions",
    "Unlimited members",
    "Advanced analytics & AI",
    "Dedicated support",
    "Unlimited projects",
  ],
};

const prices = {
  monthly: {
    beginner: "Free",
    standard: "Rp 500K",
    premium: "Rp 1.5M",
  },
  yearly: {
    beginner: "Free",
    standard: "Rp 5M",
    premium: "Rp 15M",
  },
  hari: {
    beginner: "Free",
    standard: "Rp 2M",
    premium: "Rp 100M",
  },
  jam: {
    beginner: "AH terserah",
    standard: "Rp 2M",
    premium: "Rp 1900000M",
  },
};

export const Pricing = () => {
  const [selected, setSelected] = useState("monthly");

  const PricingCard = ({ title, price, features, isPremium }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`relative p-8 rounded-2xl ${
        isPremium
          ? "bg-gradient-to-br from-blue-600 to-purple-600 border border-blue-500"
          : "bg-gray-800 border border-gray-700"
      }`}
    >
      {isPremium && (
        <span className="absolute top-0 right-8 bg-white text-blue-600 px-3 py-1 rounded-b-lg text-sm font-medium">
          Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400 ml-2">/{selected}</span>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckArrowIcon
              className={`w-5 h-5 mr-3 ${
                isPremium ? "text-white" : "text-blue-500"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section className="py-16 w-full bg-grey1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center ">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-textJudul font-medium"
          >
            PRICING PLANS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mt-4 mb-6 text-textJudul"
          >
            Find the perfect plan for your business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-textJudul max-w-2xl mx-auto"
          >
            Choose the plan that best suits your needs. All plans include access
            to our core features.
          </motion.p>

          <div className="inline-flex rounded-lg bg-textJudul my-9">
            {["monthly", "yearly", "hari", "jam"].map((period, index, arr) => (
              <button
                key={period}
                onClick={() => setSelected(period)}
                className={`px-6 py-2 font-medium transition-all duration-200 
                  ${index === 0 ? "rounded-l-lg" : ""} 
                  ${index === arr.length - 1 ? "rounded-r-lg" : ""}
                  ${
                    selected === period
                      ? "bg-grey2 text-white"
                      : "text-gray-400 hover:bg-gray-700"
                  }
                  ${
                    index !== arr.length - 1 ? "border-r border-gray-700" : ""
                  }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Beginner"
              price={prices[selected].beginner}
              features={pricingData.beginner}
            />
            <PricingCard
              title="Standard"
              price={prices[selected].standard}
              features={pricingData.standard}
              isPremium={true}
            />
            <PricingCard
              title="Premium"
              price={prices[selected].premium}
              features={pricingData.premium}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
