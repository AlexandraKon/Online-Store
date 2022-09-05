import { TProduct } from '../../types/types';

type Props = {
    products: TProduct[] | null
        isLoading: boolean
        error: null | Error
}

export type TProductsState = {
    saleProducts: Props,
    currentProduct: TProduct | null
}