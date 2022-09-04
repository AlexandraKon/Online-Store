import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetSaleProductRequested } from '../redux/product/actions';
import { saleProductSucceedSelector } from '../redux/product/selectors';

export const useRequestProducts = () => {
    const dispatch = useDispatch();
    const saleProduct = useSelector(saleProductSucceedSelector);

    useEffect(() => {
        if (saleProduct === null) {
            dispatch(actionGetSaleProductRequested())
        }
    }, [dispatch, saleProduct])

    return { saleProduct }
}
