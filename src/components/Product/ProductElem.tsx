import { memo, RefObject } from 'react';
import { TProduct } from '../../types/types';
import Loader from '../UI/Loader/Loader'
import {Slider} from '../UI/Slider/Slider';
import { ProductSection } from './styles';

type Props = {
    searchRef?: RefObject<HTMLDivElement> | null
    productos: TProduct[] | null
    title: string
}

const ProductElem =  memo(({ searchRef, productos, title }: Props) => {
    return (
        <ProductSection className="hotels">
                <div ref={searchRef} className="container hotels__container">
                    <h2 className="hotels__title">{title}</h2>
                    {<Slider productos={productos} />}
                </div>
        </ProductSection>
    )
});

export default ProductElem;