import React from "react";

interface ButtonComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  onClick,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="bg-white px-3 rounded-full cursor-pointer"
      >
        {children}
      </div>
    </>
  );
};

export default ButtonComponent;
