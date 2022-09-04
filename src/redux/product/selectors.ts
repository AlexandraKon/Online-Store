import { TInitialState } from '../../store/type';

export const saleProductsLoadingSelector = (state: TInitialState) =>
    state.products.saleProducts.isLoading
export const saleProductSucceedSelector = (state: TInitialState) =>
    state.products.saleProducts.products
export const saleProductFailedSelector = (state: TInitialState) =>
    state.products.saleProducts.error

export const currentProductSelector = (state: TInitialState) =>
    state.products.currentProduct
