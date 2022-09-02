import React from 'react';

type FormBtnProps = { 
    children?: React.ReadNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    role?: string;
};

export const FormBtn: React.FC<FormBtnProps> = ({
    children,
    className,
    type, 
    onClick,
    role,
}) => {
    return (
    <button
    type={type}
    onClick={onClick}
    role={role}
    >
    {children}</button>
    );
};