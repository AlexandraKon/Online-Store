import styled from "styled-components";
import {Nav} from "../components/Nav/Nav";
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";


export const Homepage = () => {

    return (
        <Container>
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
