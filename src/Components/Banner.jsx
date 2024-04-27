import './Banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='h-full'>
           <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='slide slide-1'>
            </div></SwiperSlide>
        <SwiperSlide><div className='slide slide-2'>
            </div></SwiperSlide>
        <SwiperSlide><div className='slide slide-3'>
            </div></SwiperSlide>
        <SwiperSlide><div className='slide slide-4'>
            </div></SwiperSlide>
        
      </Swiper> 
        </div>
    );
};

export default Banner;