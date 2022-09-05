import vector from '../../images/shop/vector.svg';
import mask1 from '../../images/shop/mask1.png';
import mask2 from '../../images/shop/mask2.png';
import mask3 from '../../images/shop/mask3.png';
import mask4 from '../../images/shop/mask4.png';
import mask5 from '../../images/shop/mask5.png' ;
import { ShopDiv, ShopSection, ShopText, ShopVector, ShopImg, ShopFirst, ShopDivGr} from './styles';

export const Shop = () => {
  return (
    <ShopSection>
        <ShopDivGr>
            <ShopText>SHOP INSTAGRAM</ShopText>
            <ShopText>SHOP</ShopText>
            <ShopVector src={vector} alt="vector"></ShopVector>
        </ShopDivGr>
        <ShopDivGr>
            <div>
                <ShopFirst src={mask1} alt="mask1"></ShopFirst>
            </div>
            <div>
                <ShopDiv>
                <ShopImg src={mask2} alt="mask2"></ShopImg>
                <ShopImg src={mask3} alt="mask3"></ShopImg>
                </ShopDiv>
                <ShopDiv>
                <ShopImg src={mask4} alt="mask4"></ShopImg>
                <ShopImg src={mask5} alt="mask5"></ShopImg>
                </ShopDiv>
                
            </div>
        </ShopDivGr>
        <ShopDivGr>
            
        <ShopText>#MODNIKKY</ShopText>
        </ShopDivGr>
    </ShopSection>
  )
}