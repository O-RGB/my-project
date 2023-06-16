import React from "react";

interface NotificationComponentProps {
  appIcon?: React.ReactNode;
  appName?: string;
  appDetail?: string;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  appIcon,
  appName,
  appDetail,
}) => {
  return (
    <>
      <div className="w-full bg-white bg-opacity-20 rounded-3xl h-20">
        <div className="flex justify-between gap-1 w-full h-full">
          <div className="p-3 h-full  overflow-hidden w-[6.5rem] ">
            <div className=" h-full bg-white rounded-2xl">
              <div className="flex justify-center items-center h-full text-2xl">
                {appIcon}
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center w-full">
            <div className="flex flex-col  ">
              <div className="text-lg text-white ">{appName}</div>
              <div className="-mt-1 text-sm text-white">{appDetail}</div>
            </div>
          </div>

          <div className="flex justify-start items-center w-fit text-white p-3 text-sm">
            <div className="-mt-7">now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationComponent;
