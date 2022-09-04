import { createAction } from 'redux-actions';

export enum ProductTypesActions {
    PRODUCTS = 'PRODUCTS',
    CURRENT_PRODUCT = 'CURRENT_PRODUCT',
}

export const actionGetSaleProductRequested = createAction(
    ProductTypesActions.PRODUCTS
);

export const actionSetCurrentProduct = createAction(
    ProductTypesActions.CURRENT_PRODUCT
);