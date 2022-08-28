import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    width: 100%;
    position: absolute;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-right: 50px;

`;

export const NavListIteam  = styled.li`
    list-style:none;
`;

export const NavButton = styled.button`
    font-weight: 400;
    line-height: 20px;
    color: #FFFFFF;
    border: none;
    background:none;
`;

export const NavLogo = styled.img`
    width: 180px;
`;

export const NavIcon = styled.img`
width: 15px;
`;