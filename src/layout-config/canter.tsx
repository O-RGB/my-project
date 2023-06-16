import React from "react";

interface LayoutCenterProps {
  children: React.ReactNode;
}

const LayoutCenter: React.FC<LayoutCenterProps> = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default LayoutCenter;
