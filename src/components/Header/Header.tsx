import newCollection from "../../images/header/mask.png";
import {HeaderContainer, Cont, HeaderImage, HeaderDesc, HeaderTitle, HeaderText, HeaderBtn} from './styles';


export const Header = () => {

    return (
        <HeaderContainer>
            <Cont>
            <HeaderImage src={newCollection} alt="NEW COLLECTION"/>
            <HeaderDesc >
                <HeaderTitle>NEW COLLECTION</HeaderTitle>
                <HeaderText>Our easiest chuck-on-and-go staples come with a serious style heritage <br/> that’s liberating, sexy, comfy and supremely cool. </HeaderText>
                <HeaderBtn>SHOP NEW ARRIVALS</HeaderBtn>
            </HeaderDesc>
            </Cont>
        </HeaderContainer>
    );
}