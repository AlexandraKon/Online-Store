import styled from "styled-components";

export const Nav = () => {

    return (
        <NavContainer>
            <NavList>
                <NavListIteam></NavListIteam>
                <NavListIteam></NavListIteam>
                <NavListIteam></NavListIteam>

            </NavList>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    display: flex;
    

`;

const NavList = styled.ul`
`;

const NavListIteam  = styled.li`
`;

