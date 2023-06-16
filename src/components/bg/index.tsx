import React from "react";

interface BackgrondComponentProps {
  children: React.ReactNode;
}

const BackgrondComponent: React.FC<BackgrondComponentProps> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-violet-600 p-5 transition-all duration-200">
        {children}
      </div>
    </>
  );
};

export default BackgrondComponent;
