import { comoros } from "../assets/data/iles";
import GalleryCard from "./GalleryCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const GalleryList = () => {
  return (
    <div
      className="px-6 card__list 
    sm:grid
    sm:grid-cols-2 
    sm:gap-5 
    lg:flex lg:items-center lg:justify-center lg:gap-5 pt-5 
    md:grid md:grid-cols-2 md:gap-5 
    
    "
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {comoros.slice(0, 6).map((item, index) => (
          <SwiperSlide key={index}>
            <GalleryCard key={index} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default GalleryList;
//! recuerer que le 4 1er images 
// comoros.slice(0, 4).map((item, index) 