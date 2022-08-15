import styled from "styled-components";
import {Nav} from "../Nav/Nav";
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";


export const Homepage = () => {

    return (
        <Container>
            <Nav/>
            <Header/>
            <Main/>
        </Container>
    );
}

const Container  = styled.div`
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    max-width: 1260px;
`;
