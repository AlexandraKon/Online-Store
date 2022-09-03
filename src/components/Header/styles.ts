import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
`;

export const Cont = styled.div`
width: 100%;
height: 100%;
`;

export const HeaderImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const HeaderDesc = styled.div`
    position: absolute;
    top: 70%;
    left: 10%;
    padding: 1rem;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        position: relative;
        color: black;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        left: 0;
    }
`;

export const HeaderTitle = styled.h2`
font-weight: 700;
margin-bottom: 20px;
`;

export const HeaderText = styled.p `
font-weight: 400;
letter-spacing: 0.04em;
margin-bottom: 30px;
line-height: 23px;
`;

export const HeaderBtn = styled.button `
border: 2px solid #FFFFFF;
background:none;
width: 180px;
height: 50px;
color: #FFFFFF;

    @media (max-width: 768px) {
        color: black;
        border-color: black;
    }
`;