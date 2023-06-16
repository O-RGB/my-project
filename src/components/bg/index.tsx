import React from 'react';

interface BackgrondComponentProps {
    children: React.ReactNode
}

const BackgrondComponent: React.FC<BackgrondComponentProps> = ({ children }) => {
    return (
        <>
            <div className='bg-purple-500 p-5'>{children}</div>
        </>
    );
};

export default BackgrondComponent;
