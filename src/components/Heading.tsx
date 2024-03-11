import React from "react";

const Heading = ({
  heading,
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return (
    <div className={`text-4xl text-primeColor font-semibold pb-6 ${className}`}>
      {heading}
    </div>
  );
};

export default Heading;
