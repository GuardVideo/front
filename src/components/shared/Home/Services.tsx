import React from "react";
import { IconType } from "react-icons";
import {
  FaLock,
  FaBan,
  FaLink,
  FaGlobe,
  FaChartLine,
  FaCog,
} from "react-icons/fa";
import MainTitle from "../MainTitle";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="h-full card-gradient rounded-2xl p-6 flex flex-col items-center service-card">
    <div className="p-5 icon-gradient rounded-full mb-5 service-card-icon">
      <Icon
        size={32}
        color="#fff"
      />
    </div>
    <h3 className="text-white text-2xl font-medium text-center mb-3">
      {title}
    </h3>
    <p className="text-[#ececec] text-lg text-center leading-relaxed">
      {description}
    </p>
  </div>
);

const services = [
  {
    title: "Dynamic Watermarking & Encryption & DRM",
    description:
      "GuardVideo ensures your content is protected with state-of-the-art encryption, DRM, and customizable watermarks to prevent unauthorized sharing.",
    icon: FaLock,
  },
  {
    title: "Prevent Video Download",
    description:
      "Secure your videos against unauthorized downloads, maintaining control over your content and safeguarding intellectual property.",
    icon: FaBan,
  },
  {
    title: "Flexible API Integration & Easy to Use",
    description:
      "Seamlessly integrate with your existing systems using GuardVideo's flexible and developer-friendly API, designed for easy implementation.",
    icon: FaLink,
  },
  {
    title: "Global CDN & Fast Streaming",
    description:
      "Deliver your videos with minimal buffering and latency, ensuring a smooth viewing experience worldwide through our global CDN network.",
    icon: FaGlobe,
  },
  {
    title: "Advanced Analytics & Reporting",
    description:
      "Gain insights into viewer behavior and content performance with real-time analytics and detailed usage reports.",
    icon: FaChartLine,
  },
  {
    title: "Customizable Player & User Experience",
    description:
      "Personalize the video player and user experience to match your brand and provide an engaging interface for your audience.",
    icon: FaCog,
  },
];

const Services: React.FC = () => (
  <div>
    <MainTitle
      title="Services"
      subtitle="Cutting-Edge Features to Protect and Enhance Your Video Content"
    />
    <div className="container mx-auto overflow-y-clip">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
