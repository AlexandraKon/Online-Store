import styled from "styled-components";
import newCollection from "../../images/header/mask.png";


export const Header = () => {

    return (
        <HeaderContainer>
            <img className="header-image" src={newCollection} alt="NEW COLLECTION"/>
            <div className="">
                <h2 className="">NEW COLLECTION</h2>
                <p>Our easiest chuck-on-and-go staples come with a serious style heritage <br/> that’s liberating, sexy, comfy and supremely cool. </p>
                <button className="">SHOP NEW ARRIVALS</button>
            </div>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    text-color: white;
    width: 100%;


    & .header-image {
        width: 100%;
    }
`;