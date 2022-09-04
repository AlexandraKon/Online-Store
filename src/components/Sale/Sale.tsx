import { memo, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useRequestProducts } from '../../hooks/useRequestProducts';
import { saleProductsLoadingSelector} from '../../redux/product/selectors';
import ProductElem from '../Product/ProductElem';
import { TProduct } from '../../types/types';

type Props = {
    product: TProduct,
}

export const Sale = () => {
    const { saleProduct } = useRequestProducts();
    const saleProductLoading =  useSelector(saleProductsLoadingSelector);


    /*useEffect(() => {
        const getData = async () => {
            const data = await (
                await fetch('https://modnikky-api.herokuapp.com/api/cart')
            ).json();
            setData(data);
        };

        getData();
    }, []);

    if (data.length < 1) return <div>Loading...</div>*/
    
    return (
    <div>
            <ProductElem
                productos={saleProduct}
                title="#MODNIKKY_Sale"
                loading={saleProductLoading}
            />
            </div>
    )
}