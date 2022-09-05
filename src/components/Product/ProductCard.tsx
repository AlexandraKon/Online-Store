import {useState, memo } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {TProduct} from '../../types/types';
import { useDispatch } from 'react-redux'
import { actionSetCurrentProduct } from '../../redux/product/actions';
import { Link } from 'react-router-dom';
import {ProductDiv, ProductImg, ProductText} from './styles';

type Props = {
    product: TProduct,
}

export const ProductCard =  ({product}: Props) => { 
    const [like, setLike] = useState(false);
    const [saved, setSaved] =useState(false);

    const dispatch = useDispatch();

    const handleClick = () => dispatch(actionSetCurrentProduct(product));

    /*const { user } = UserAuth();
    

    const movieID = doc(db, 'users', `${user?.email}`);
    const saveShow = async () => {
      if(user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.images
          })
        });
      } else {
        alert('Please, log in to save a movie!')
      }
    }*/


  return (
    <ProductDiv>
      <Link to={`/product/${product.id}`} onClick={handleClick}>
        <ProductImg src={product.images[0]} alt={product.name} />
        <ProductText>$ {product.price.value}</ProductText>
        </Link>
    </ProductDiv>
  );
};