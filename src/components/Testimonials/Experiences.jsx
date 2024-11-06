import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
          culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
          tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum harum.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper  "
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <div className="">
          {/*  */}
          <SwiperSlide className="testimonial py-4 px-3  ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
              culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
              tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum
              harum.
            </p>
            <div className="flex items-center gap-4 mt-4  ">
              <img src={ava01} alt="" className="w-24 h-24 rounded-sm" />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </SwiperSlide>
          {/*  */}
          <SwiperSlide className="testimonial py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
              culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
              tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum
              harum.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src={ava02} alt="" className="w-24 h-24 rounded-sm" />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
              culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
              tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum
              harum.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src={ava03} alt="" className="w-24 h-24 rounded-sm" />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
              culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
              tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum
              harum.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src={ava03} alt="" className="w-24 h-24 rounded-sm" />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
              culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
              tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum
              harum.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src={ava03} alt="" className="w-24 h-24 rounded-sm" />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae harum
              culpa suscipit pariatur ratione placeat impedit hic! Autem necessitatibus
              tempore iure nesciunt suscipit voluptatibus voluptate dolore amet earum
              harum.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src={ava03} alt="" className="w-20 h-20 rounded-sm" />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};
export default Testimonials;
