import { Link } from 'react-router-dom';
import React, {useState } from 'react';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';

export const Prod = ({item}) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] =useState(false);
    const { user } = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);
    const saveShow = async () => {
        if(user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
            savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
            })
        });
        } else {
        alert('Please, log in to save a movie!')
      }
    }
  return (
    <ProductDiv>
      <Link to={`/product/${item?.id}`} >
        <ProductImg src={item?.images[0]} alt={item?.name} />
        <ProductText>$ {item?.price.value}</ProductText>
        <ProductLike onClick={saveShow} >
                {like ? (
                <FaHeart className='like' />
                ) : (
                <FaRegHeart className='like'/>
                )}
            </ProductLike>
        </Link>
    </ProductDiv>
  )
}

const ProductLike = styled.p`

.like{
  position: absolute;
  top: 1rem;
  right: 1rem;
  --tw-text-opacity: 1;
  color: #FFFFFF;
}
`;


const ProductDiv = styled.div`
    width: 300px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding: 0.5rem;
`;

export const ProductImg = styled.img`
    width: 100%;
    display: block;
`;

export const ProductText = styled.p`


`;
