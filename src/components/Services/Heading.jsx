import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-[40px] font-bold text-inkTeal">{title}</h1>
      <p className="px-16 text-center text-inkLight">{subtitle}</p>
    </div>
  );
};

export default Heading;
