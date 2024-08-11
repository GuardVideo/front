import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const MainTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center my-12 relative container">
      <h2 className="text-white text-4xl font-medium mb-4">{title}</h2>
      <p className="text-white text-lg max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-40 h-40 bg-[#44c09b80] rounded-full blur-[174px] absolute top-0 left-1/2 -translate-x-1/2 z-[-1]" />
    </div>
  );
};

export default MainTitle;
