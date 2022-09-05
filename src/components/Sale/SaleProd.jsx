import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Prod } from './Prod';

export const SaleProd = ({ title, fetchURL}) => {
    const [product, setProduct] = useState([]);

    
    useEffect(() => {
        const getData = async () => {
            const data = await (
                await fetch(fetchURL)
            ).json();
            setProduct(data);
        };

        getData();
    }, [fetchURL]);

    
    const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (
    <SlideSection>
        <SlideTitle>{title}</SlideTitle>
        <SlideDiv className='relative flex items-center group'>
            <MdChevronLeft 
            onClick={slideLeft} className='slider-left slider' size={40}/>
            <SlideProdDiv id={'slider'} >
            {product.map((item, id) => (
                <Prod key={id} item={item}/>
            ))}
            </SlideProdDiv>
        <MdChevronRight onClick={slideRight} className='slider-right slider' size={40}/>

        </SlideDiv>
    </SlideSection>
    )
}

const SlideSection = styled.section`
    width: 100%; 
    height: 100%;
`;

const SlideTitle = styled.h2`
    text-align: center;
    font-weight: 400;
    padding: 1rem;
    color: #000F08;
    @media (min-width: 768px) {
        .md\:text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }
`;

const SlideDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    .slider {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        border-radius: 9999px;
        position: absolute;
        opacity: 0.5;
        cursor: pointer;
        z-index: 10;
        }

    .slider:hover {
        opacity: 1;
    }
    .slider-right{
        right: 0px;
    }
    .slider-left{
        left: 0px;
    }
`;

const SlideProdDiv = styled.div`
    width: 100%; 
    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
`;
