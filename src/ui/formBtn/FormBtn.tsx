import styled from "styled-components";


type FormBtnProps = { 
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    role?: string;
};

export const FormBtn: React.FC<FormBtnProps> = ({
    children,
    type, 
    onClick,
    role,
}) => {
    return (
    <FormButton
    type={type}
    onClick={onClick}
    role={role}
    >
    {children}</FormButton>
    );
};

const FormButton = styled.button`
    background: #000000;
    color: white;
    width: 240px;
    height: 50px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 115px;
    margin-right: 115px;
`;