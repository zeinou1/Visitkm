/* eslint-disable react/prop-types */
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Experiences from "../components/Testimonials/Experiences";
import SearchBar from "../shared/SearchBar";
import Soutitre from "../shared/Soutitre";
import GalleryList from "./GalleryList";
import comoros from "../assets/data/tours.js";
import imgh from "../../public/plage2.jpg"
// import { comoros } from "../assets/data/iles";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <>
      <section className="md:max-w-7xl md:px-[50px] ">
        <div className="hero__section relative  ">
          {/* -------hero--------- */}
          <div className=" ">
            <div className="hero__content px-[29px]">
              <div className="hero__subtitle absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
                <h1 className="text-gray-50 text-center text-[32px] font-[700] tracking-tight  ">
                  Enjoy Your Dream Vacation
                </h1>
                <p className="text-[#fff] text-center text-[15px] font-[200] leading-7 tracking-[0.4px]">
                  Plan and book our perfect trip with expert advice, travel tips,
                  destination information and inspiration from us
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[100%]  ">
            <SearchBar />
          </div>
        </div>
        {/* =========End Hero========= */}
      </section>

      {/* ========= gallery ========= */}
      <section className="md:px-11 mx-auto max-w-7xl">
        <div className="  px-[29px]">
          <div className="gallery__wrap">
            <Soutitre subtitle={"Enjoy your dream vacation"} />
            <div
              className="overflow-hidden max-w-full
            "
            >
              <p className="text-[16px] font-[300] leading-7 tracking-[0.32px] pt-[16px]">
                Plan and book our perfect trip with expert advice, travel tips,
                destination information and inspiration from us
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <GalleryList />
        </div>
      </section>
      {/* ========= End gallery ========= */}

   
      <section className="md:px-11 mx-auto max-w-7xl">
        <div className="">
          <div
            className="title__inspiration  
            flex flex-col items-center justify-center gap-4
            px-[29px]"
          >
            <div className="self-start">
              <Soutitre subtitle={"Get inspiration for your next trip"} />
            </div>
            <div
              className="content__inspiration  
              
              sm:grid sm:grid-cols-3 sm:gap-4
              mt-5"
            >
              {comoros.map((item, index) => {
                if (item.category === "inspiration") {
                  return (
                    <div key={index} className="relative rounded-md">
                      <div className='w-full h-[300px] min-w-[89%]'>
                        <img src={item.photo} alt="" className="rounded-sm w-full mt-4 sm:mt-0  object-cover" />
                      </div>
                      <div className="absolute left-4   bottom-12 w-full">
                        <span className="text-[20px] text-white dark:text-gray-50  font-[400]">
                          <Link to={`/hotels/${item.id}`}>{item.title}</Link>
                        </span>
                        <p className="text-[16px] text-white font-[300]">{item.desc}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    
      {/* ============= Best hotel ============ */}
      <section className="md:px-11 mx-auto max-w-7xl">
        <div className="px-[29px]">
          <div className="title__best">
            <div className="">
              <Soutitre subtitle={"Popular hotels"} />
            </div>
            <div
              className="content__inspiration mt-5
             lg:grid lg:grid-cols-4 lg:gap-4
             md:grid md:grid-cols-3 md:gap-4
             sm:grid sm:grid-cols-2 sm:gap-3
            "
            >
              {comoros.map((item, index) => {
                if (item.category === "best") {
                  return (
                    <div
                      key={index}
                      className="relative 
                      "
                    >
                      <div>
                        <img
                          src={item.photo}
                          alt=""
                          className="lg:w-[295px] lg:h-[200px] rounded-md"
                        />
                      </div>

                      <div className="">
                        <span className="text-[20px] text-gray-950 font-[400]">
                          {item.name}
                        </span>
                        <p className="text-[16px]  font-[300]">
                          <Link to={`/hotels/${item.id}`}> {item.desc} </Link>
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-[50px] w-full max-w-7xl mx-auto ">
      
        <Experiences />
    
      </section>

      <Newsletter />
    </>
  );
};
export default Home;
