import dressIcon from '../../images/category/dress.svg';
import beautyIcon from '../../images/category/beauty.svg';
import teesIcon from '../../images/category/tees.svg';
import swimIcon from '../../images/category/swimwear.svg';
import denimIcon from '../../images/category/denim.svg';
import topsIcon from '../../images/category/tops.svg';
import { MainContainer, MainCategory, MainCategoryList, MainCategoryItem, MainCategoryBtn, MainIcon} from './styles';


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