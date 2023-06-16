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
          <div className="w-[500px]">
            <HeaderComponent
              onClickShowLess={(e) => {
                setNotification(e);
              }}
            ></HeaderComponent>
            {notification == true ? (
              <div className="flex flex-col gap-2 pt-4">
                <NotificationComponent
                  appIcon={"🟣"}
                  appName="Fackbook"
                  appDetail="wiegjoaie jeoigjao"
                ></NotificationComponent>
                <NotificationComponent
                  appIcon={"🟣"}
                  appName="VsCode"
                  appDetail="wiegjoaie jeoigjao"
                ></NotificationComponent>
              </div>
            ) : (
              <></>
            )}
          </div>
        </BackgrondComponent>
      </LayoutCenter>
    </>
  );
};

export default MainPage;
