import React from 'react';

const Button = ({ children, className }) => {
    return (
        <button className={`p-2 rounded-lg bg-primary text-white text-base font-bold ${className}`}>
            {children}
        </button>
    );
};

export default Button;