import React, { useState } from "react";
import ButtonComponent from "../button";

interface HeaderComponentProps {
  onClickShowLess?: (value: boolean) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onClickShowLess,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="text-3xl text-white">Messenger</div>
        <div className="flex gap-2">
          {/* button */}
          <ButtonComponent
            onClick={() => {
              setShow(!show);
              onClickShowLess?.(!show);
            }}
          >
            <div className="flex gap-4 justify-center items-center">
              <div className="text-lg mt-2">^</div>
              <div>Show less</div>
            </div>
          </ButtonComponent>
          {/* exit */}
          <ButtonComponent>
            <div className="mt-1.5">X</div>
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
