import styled from "styled-components";

export const LoginSection = styled.section`
    background: #BDBDBD;
    width: 100%;
    height: 100%;
`;

export const LoginConteiner = styled.div`
    width: 100%;
    padding-left: 1rem/* 16px */;
    padding-right: 1rem/* 16px */;
    padding-top: 6rem/* 96px */;
    padding-bottom: 6rem/* 96px */;
    z-index: 50;
`;

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 550px;
    height: 600px;
    margin-left: auto;
    margin-right: auto;
    background: #FFFFFF;
`;

export const LoginTitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px;
`;

export const LoginTitle = styled.h2`
    font-size: 22px;
    line-height: 38px;
    letter-spacing: 0.04em;
    color: #000F08;
`;

export const FormBlock = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
`;
export const FormInput = styled.input`
    width: 100%;
    font-size: 16px;
    line-height: 14px;
    border-bottom: 2px solid #D8D8D8;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

export const FormCheckDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const FormCheckInput = styled.input`
    background-color: black;
    width: 17px;
    height: 17px;
`;

export const FormText = styled.p`
    font-size: 14px;
    line-height: 26px;
    color: #000F08;
`;

export const FormTextAcc = styled.p`
font-size: 14px;
    line-height: 26px;
    text-decoration-line: underline;
    color: #000F08;
`;

export const TextError = styled.p`

`;