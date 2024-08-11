import React from "react";
import { IconType } from "react-icons";
import { FaLock, FaCode, FaChartBar, FaRocket, FaCheck } from "react-icons/fa";
import MainTitle from "../MainTitle";

interface SubFeature {
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description?: string;
  subFeatures?: SubFeature[];
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  subFeatures,
  className,
}) => (
  <div
    className={`bg-[#236745B2] rounded-3xl shadow p-6 flex flex-col gap-5 ${className}`}
  >
    <div className="flex items-center gap-4">
      <Icon className="text-primaryColor text-3xl" />
      <h3 className="text-primaryColor text-xl font-semibold">{title}</h3>
    </div>
    {description && (
      <p className="text-white text-lg font-light">{description}</p>
    )}
    {subFeatures && (
      <div className="flex flex-col gap-4">
        {subFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-2"
          >
            <FaCheck className="text-[#48BB78] text-lg mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white text-lg font-normal leading-tight">
                {feature.title}
              </h4>
              <p className="text-[#9ba9b4] text-sm leading-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Features: React.FC = () => (
  <div>
    <MainTitle
      title="Features"
      subtitle="Cutting-Edge Features to Protect and Enhance Your Video Content"
    />
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1">
        <FeatureCard
          icon={FaLock}
          title="Secure Video Hosting"
          description="GuardVideo protects your videos from unauthorized access and piracy using advanced encryption and secure streaming protocols."
          subFeatures={[
            {
              title: "Google Widevine DRM",
              description:
                "Encrypted streaming to prevent piracy and unauthorized distribution.",
            },
            {
              title: "Dynamic Watermarking",
              description:
                "Personalize watermarks on each stream to deter and track unauthorized recordings.",
            },
            {
              title: "Domain Restriction",
              description:
                "Control where your videos can be embedded and viewed.",
            },
            {
              title: "Rapid, secure delivery via AWS servers with CDN",
              description:
                "Fast, reliable, and globally distributed hosting to deliver high-quality video content with minimal buffering.",
            },
            {
              title: "Multi-quality bitrate streaming",
              description:
                "Deliver an optimal viewing experience with multi-quality bitrate streaming. GuardVideo ensures smooth playback and minimal buffering by automatically adjusting video quality based on internet speed.",
            },
          ]}
        />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
          icon={FaCode}
          title="API Integration"
          description="Seamless and Flexible: Integrate GuardVideo with your existing systems using our robust APIs. Manage video uploads, streaming, and security features with ease and flexibility."
        />
        <FeatureCard
          icon={FaChartBar}
          title="Real-time Analytics"
          description="Insights and Usage Reports: Integrate GuardVideo with your existing systems using our robust APIs. Manage video uploads, streaming, and security features with ease and flexibility."
        />
        <FeatureCard
          icon={FaRocket}
          title="High Performance & Real Security & Comprehensive Support"
          subFeatures={[
            {
              title: "Real Security",
              description:
                "GuardVideo provides cutting-edge encryption and DRM to prevent unauthorized access and piracy.",
            },
            {
              title: "High Performance",
              description:
                "Our global CDN network ensures high-speed video delivery with minimal buffering.",
            },
            {
              title: "Comprehensive Support",
              description:
                "We support all devices and provide robust technical assistance for seamless integration.",
            },
            {
              title: "24/7 Support",
              description:
                "Our dedicated support team is available around the clock to assist with any issues.",
            },
          ]}
          className="md:col-span-2"
        />
      </div>
    </div>
  </div>
);

export default Features;
