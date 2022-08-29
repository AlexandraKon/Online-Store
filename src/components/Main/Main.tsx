import styled from "styled-components";
import dressIcon from '../../images/category/dress.svg';
import beautyIcon from '../../images/category/beauty.svg';
import teesIcon from '../../images/category/tees.svg';
import swimIcon from '../../images/category/swimwear.svg';
import denimIcon from '../../images/category/denim.svg';
import topsIcon from '../../images/category/tops.svg';


export const Main = () => {

    return (
        <MainContainer>
            <MainCategory>Shop by the <strong>Category</strong></MainCategory>
            <MainCategoryList>
                <MainCategoryItem>
                    <MainCategoryBtn> 
                    <MainIcon src={dressIcon} alt="dress"/>
                        Dresses 
                    </MainCategoryBtn>
                </MainCategoryItem>
                <MainCategoryItem>
                    <MainCategoryBtn>
                    <MainIcon src={teesIcon} alt="tees"/>
                     Tees
                     </MainCategoryBtn>
                </MainCategoryItem>
                <MainCategoryItem>
                    <MainCategoryBtn>
                    <MainIcon src={swimIcon} alt="swim"/>
                     Swimwear</MainCategoryBtn>
                </MainCategoryItem>
                <MainCategoryItem>
                    <MainCategoryBtn> 
                    <MainIcon src={denimIcon} alt="denim"/>
                    Denim</MainCategoryBtn>
                </MainCategoryItem>
                <MainCategoryItem>
                    <MainCategoryBtn>
                    <MainIcon src={topsIcon} alt="tops"/>
                    Tops </MainCategoryBtn>
                </MainCategoryItem>

                <MainCategoryItem>
                    <MainCategoryBtn>
                    <MainIcon src={beautyIcon} alt="Beauty"/>Beauty </MainCategoryBtn>
                </MainCategoryItem>

            </MainCategoryList>
        </MainContainer>
    );
}

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
`;

const MainCategory = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #000F08;
    margin: 50px;
    text-align:center;
`;

const MainCategoryList  = styled.ul`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
`;

const MainCategoryItem = styled.li`

`;

const MainCategoryBtn = styled.button`
    width: 150px;
    height: 60px;
    background: #EDE7F0;
    margin: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
    font-size: 20px;
`;

const MainIcon  = styled.img`
    width: 50px;
    height: 40px;
`;