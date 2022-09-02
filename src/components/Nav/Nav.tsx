import { Link } from 'react-router-dom';
import brandLogo from '../../images/nav/brand-logo.svg';
import searchIcon from '../../images/nav/searchicon.svg';
import favIcon from '../../images/nav/favicon.svg';
import { NavContainer, NavList, NavListIteam, NavButton, NavLogo, NavIcon} from './styles';



export const Nav = () => {
    return (
        <NavContainer>
            <NavList>
                <NavListIteam>
                    <Link to='/product'>
                        <NavButton>NEW ARRIVALS</NavButton>
                    </Link>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/product'>
                        <NavButton>SHOP</NavButton>
                    </Link>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/product'>
                        <NavButton>COLLECTIONS</NavButton>
                    </Link>
                </NavListIteam>
            </NavList>

            <Link to='/'>
                <NavLogo src={brandLogo} alt="MODNIKKY" />
            </Link>

            <NavList>
                <NavListIteam>
                    <Link to='/search'>
                        <NavButton>
                            <NavIcon src={searchIcon} alt="search"/>
                            SEARCH</NavButton>
                    </Link>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/signin'>
                        <NavButton>SIGN IN</NavButton>
                    </Link>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/product'>
                        <NavButton>BAG</NavButton>
                    </Link>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/favorites'>
                        <NavButton>
                            <NavIcon src={favIcon} alt="fav"/>
                        </NavButton>
                    </Link>
                </NavListIteam>
            </NavList>
        </NavContainer>
    );
}