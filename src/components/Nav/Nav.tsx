import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";

export const Nav = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();


    const handleLogout = async () => {
      try {
        await logOut();
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <NavContainer>
            <NavList>
                <NavListIteam>
                    <p>NEW ARRIVALS</p>
                    <p>SHOP</p>
                    <p>COLLECTIONS</p>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/'>
                    <svg width="471" height="54" viewBox="0 0 471 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.55 38L20.71 2.02H0.76V52H13.92V11.96H14.06L29.88 52H41.22L57.04 11.96H57.18V52H70.34V2.02H50.39L35.55 38ZM77.0518 27.01C77.0518 37.44 81.2518 53.4 108.132 53.4C135.012 53.4 139.212 37.44 139.212 27.01C139.212 16.58 135.012 0.619998 108.132 0.619998C81.2518 0.619998 77.0518 16.58 77.0518 27.01ZM91.4718 27.01C91.4718 19.24 95.8118 10.14 108.132 10.14C120.452 10.14 124.792 19.24 124.792 27.01C124.792 34.78 120.452 43.88 108.132 43.88C95.8118 43.88 91.4718 34.78 91.4718 27.01ZM159.535 11.54H173.395C183.755 11.54 187.675 17.28 187.675 26.52C187.675 37.09 183.615 42.48 174.655 42.48H159.535V11.54ZM145.955 52H178.295C193.975 52 201.675 42.06 201.675 27.01C201.675 11.96 194.255 2.02 177.105 2.02H145.955V52ZM251.601 36.88H251.461L225.211 2.02H209.461V52H222.621V17.14H222.761L249.991 52H264.761V2.02H251.601V36.88ZM274.266 52H287.846V2.02H274.266V52ZM310.951 23.51V2.02H297.371V52H310.951V37.16L318.861 30.37L335.871 52H354.211L329.501 22.11L352.461 2.02H334.191L310.951 23.51ZM371.86 23.51V2.02H358.28V52H371.86V37.16L379.77 30.37L396.78 52H415.12L390.41 22.11L413.37 2.02H395.1L371.86 23.51ZM434.868 52H448.448V34.57L470.568 2.02H454.608L441.658 23.79L428.708 2.02H412.748L434.868 34.57V52Z" fill="white"/>
                    </svg>
                    </Link>
                </NavListIteam>
                <NavListIteam>
                    <Link to='/search'>
                        <button className=''>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.7061 22.5569L17.9363 16.7671C19.3665 15.0174 20.2286 12.7762 20.2286 10.3335C20.2286 4.73041 15.698 0.184082 10.1143 0.184082C4.52571 0.184082 0 4.73041 0 10.3335C0 15.9365 4.52571 20.4828 10.1143 20.4828C12.5486 20.4828 14.7771 19.6227 16.5208 18.1876L22.2906 23.9725C22.6824 24.3656 23.3143 24.3656 23.7061 23.9725C24.098 23.5842 24.098 22.9452 23.7061 22.5569ZM10.1143 18.4628C5.64245 18.4628 2.00816 14.8159 2.00816 10.3335C2.00816 5.85102 5.64245 2.19921 10.1143 2.19921C14.5812 2.19921 18.2204 5.85102 18.2204 10.3335C18.2204 14.8159 14.5812 18.4628 10.1143 18.4628Z" fill="white"/>
                        </svg>
                            SEARCH</button>
                    </Link>
                    <Link to='/login'>
                        <button className=''>SIGN IN</button>
                    </Link>
                    <Link to='/product'>
                        <button className=''>BAG</button>
                    </Link>
                    <Link to='/favorites'>
                        <button className=''>
                            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0938 2.41993C23.6644 0.985503 21.7719 0.201504 19.7521 0.201504C17.7324 0.201504 15.8341 0.99131 14.4047 2.42574L13.6581 3.17489L12.9 2.41412C11.4705 0.979695 9.56646 0.184082 7.54669 0.184082C5.5327 0.184082 3.63447 0.973888 2.21079 2.40251C0.781319 3.83693 -0.00575563 5.74176 3.16897e-05 7.76854C3.16897e-05 9.79532 0.792894 11.6943 2.22236 13.1288L13.0909 24.0351C13.2414 24.186 13.444 24.2673 13.6407 24.2673C13.8375 24.2673 14.0401 24.1919 14.1905 24.0409L25.0823 13.152C26.5117 11.7176 27.2988 9.81274 27.2988 7.78596C27.3046 5.75918 26.5233 3.85436 25.0938 2.41993ZM23.9827 12.0428L13.6407 22.3799L3.32195 12.0254C2.18764 10.8871 1.56261 9.37719 1.56261 7.76854C1.56261 6.15989 2.18185 4.64997 3.31616 3.51753C4.44469 2.38508 5.94939 1.75789 7.54669 1.75789C9.14978 1.75789 10.6603 2.38508 11.7946 3.52333L13.1025 4.83581C13.4092 5.1436 13.9012 5.1436 14.2079 4.83581L15.5042 3.53495C16.6386 2.3967 18.1491 1.7695 19.7463 1.7695C21.3436 1.7695 22.8484 2.3967 23.9827 3.52914C25.117 4.66739 25.7362 6.17731 25.7362 7.78596C25.742 9.39461 25.117 10.9045 23.9827 12.0428Z" fill="white"/>
                            </svg>
                        </button>
                    </Link>
                </NavListIteam>

            </NavList>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem/* 16px */;
    z-index: 100;
    width: 100%;
    position: absolute;
`;

const NavListIteam  = styled.li`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    /* or 83% */


    color: #FFFFFF;
`;

