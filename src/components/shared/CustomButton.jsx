import React from "react";
import { Link } from "react-router-dom";

// Reusable Custom Button Component
const CustomButton = ({
  to = "#",
  label = "Click Me",
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <Link
      to={to}
      className={`bg-[#f8a81c] hover:bg-[#f7b93e] transition-all text-white font-bold px-6 py-4 flex items-center gap-2 text-sm shadow-md rounded-tl-full rounded-tr-full rounded-br-full ${className}`}
      {...props}
    >
      {label}
    </Link>
  );
};

export default CustomButton;


 //<CustomButton to="/apply" label="APPLY NOW" icon={Pencil} />