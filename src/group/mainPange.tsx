import BackgrondComponent from "@/components/bg";
import HeaderComponent from "@/components/header";
import NotificationComponent from "@/components/notification";
import LayoutCenter from "@/layout-config/canter";
import React, { useState } from "react";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {
  const [notification, setNotification] = useState<boolean>(false);
  return (
    <>
      <LayoutCenter>
        <BackgrondComponent>
          <div className="w-full">
            <HeaderComponent
              onClickShowLess={(e) => {
                setNotification(e);
              }}
            ></HeaderComponent>

            <div
              className={`flex flex-col gap-2 pt-4 transition-all duration-1000 ${
                notification
                  ? "h-[17rem] opacity-100"
                  : "h-[1px] overflow-hidden opacity-0"
              } `}
            >
              <NotificationComponent
                appIcon={"🟣"}
                appName="Fackbook"
                appDetail="Lorem Ipsum is simply dummy text of"
              ></NotificationComponent>
              <NotificationComponent
                appIcon={"🟣"}
                appName="VsCode"
                appDetail="Since it looks like you're trying to make an accordion, I'd"
              ></NotificationComponent>
              <NotificationComponent
                appIcon={"🟣"}
                appName="VsCode"
                appDetail="Since it looks like you're trying to make an accordion, I'd"
              ></NotificationComponent>
            </div>
          </div>
        </BackgrondComponent>
      </LayoutCenter>
    </>
  );
};

export default MainPage;
