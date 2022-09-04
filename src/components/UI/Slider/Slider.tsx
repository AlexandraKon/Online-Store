import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { SwiperSlide } from 'swiper/react';
import { TProduct } from '../../../types/types';
import { ProductCard } from '../../Product/ProductCard';
import NotFound from '../NotFound';
import { StyledSwiper } from './styles';

type Props = {
    productos: TProduct[] | null
}

export const Slider = ({productos}: Props) => {

    return productos?.length ? (
        <StyledSwiper
            slidesPerView={'auto'}
            slidesPerGroup={2}
            slidesPerGroupAuto={true}
            watchSlidesProgress={true}
            spaceBetween={16}
            centerInsufficientSlides={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
        >
            {productos.map((product: TProduct) => (
                <SwiperSlide key={product.id}>
                    <ProductCard key={product.id} product={product} />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    ) : (
        <NotFound title="No products found..." />
    );
};