import BackgrondComponent from '@/components/bg';
import HeaderComponent from '@/components/header';
import LayoutCenter from '@/layout-config/canter';
import React from 'react';

interface MainPageProps {

}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <>
            <LayoutCenter>

                <BackgrondComponent>
                    <div className='w-[500px]'>
                        <HeaderComponent></HeaderComponent>

                    </div>
                </BackgrondComponent>

            </LayoutCenter>
        </>
    );
};

export default MainPage;
