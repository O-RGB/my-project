import React from 'react';
import ButtonComponent from '../button';

interface HeaderComponentProps {

}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ }) => {
    return (
        <>
            <div className='w-full flex justify-between'>

                <div className='text-3xl text-white'>Messenger</div>
                <ButtonComponent>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className='text-lg mt-3'>^</div>
                        <div>Show less</div>
                    </div>
                </ButtonComponent>

            </div>
        </>
    );
};

export default HeaderComponent;
