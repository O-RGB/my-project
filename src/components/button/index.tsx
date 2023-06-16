import React from 'react';

interface ButtonComponentProps {
    children: React.ReactNode
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ children }) => {
    return (
        <>
            <div className='bg-white p-3 rounded-full'>{children}</div>
        </>
    );
};

export default ButtonComponent;
