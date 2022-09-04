import { TProduct } from '../../types/types';

export type TProductsState = {
    saleProducts: {
        products: TProduct[] | null
        isLoading: boolean
        error: null | Error
    }
    currentProduct: TProduct | null
}