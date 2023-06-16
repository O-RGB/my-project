import React from "react";

interface BackgrondComponentProps {
  children: React.ReactNode;
}

const BackgrondComponent: React.FC<BackgrondComponentProps> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-violet-600 p-5 w-full rounded-lg shadow-md">
        {children}
      </div>
    </>
  );
};

export default BackgrondComponent;
