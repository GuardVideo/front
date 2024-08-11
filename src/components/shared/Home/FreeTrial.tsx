import React from "react";
import {
  FaRocket,
  FaCheck,
  FaLock,
  FaBan,
  FaLink,
  FaGlobe,
} from "react-icons/fa";
import MainTitle from "../MainTitle";

const FreeTrial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#236745] via-[#317653] to-[#48BB78] relative overflow-hidden">
      <MainTitle
        title="Start Your Free 30-Day Trial!"
        subtitle="Experience GuardVideo's Advanced Security Features"
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-6 leading-tight text-white">
              Secure Your Videos with
              <span className="text-primaryColor"> GuardVideo</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Unmatched Video Security and Protection with Advanced Encryption &
              DRM
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Dynamic Watermarking & Encryption",
                "Prevent Video Download",
                "Flexible API Integration",
                "Global CDN & Fast Streaming",
                "Advanced Analytics & Reporting",
                "Customizable Player",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-white"
                >
                  <FaCheck className="text-primaryColor mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="btn-outline !text-white !border-white">
              Start Free Trial
            </button>
          </div>
          <div className="w-full">
            <div className="bg-[#191919] p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-center w-20 h-20 bg-primaryColor rounded-full mb-6 mx-auto">
                <FaRocket className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-center text-white mb-4">
                30 Days of Unlimited Access
              </h3>
              <p className="text-white/80 text-center mb-6">
                Experience the full power of GuardVideo with our comprehensive
                trial. Unlock all premium features and see the difference for
                yourself.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: FaLock, text: "Advanced Encryption & DRM" },
                  { icon: FaBan, text: "Download Prevention" },
                  { icon: FaLink, text: "Easy API Integration" },
                  { icon: FaGlobe, text: "Global CDN Network" },
                ].map((perk, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-[#236745] p-3 rounded-lg"
                  >
                    <perk.icon className="text-primaryColor mr-3" />
                    <span className="text-white text-sm">{perk.text}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full btn-outline !text-white !border-white">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
