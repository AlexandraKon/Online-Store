import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    width: 100%;
    margin-top: 10px;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-right: 30px;
    margin-left: 30px;
`;

export const NavListIteam  = styled.li`
    list-style:none;
    margin: 10px;
`;

export const NavButton = styled.button`
    font-weight: 400;
    color: black;
    border: none;
    background:none;
    display: flex;
    align-items: center;
`;

export const NavLogo = styled.img`
    width: 200px;
`;

export const NavIcon = styled.img`
width: 15px;
margin-right: 5px;
`;