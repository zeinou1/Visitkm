/* eslint-disable react/prop-types */
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Experiences from "../components/Testimonials/Experiences";
import SearchBar from "../shared/SearchBar";
import Soutitre from "../shared/Soutitre";
import GalleryList from "./GalleryList";
import comoros from "../assets/data/tours.js";
import { useEffect } from "react";
// import { comoros } from "../assets/data/iles";
import Newsletter from "../shared/Newsletter";
// import useSelector
import { useSelector, useDispatch } from "react-redux";
// import hotelInfos by HotelList
import { hotelInfos } from "../components/Features/Hotel/HotelListSlice.jsx";
import AllHotelList from "./AllHotelList.jsx";
import nodata from "../assets/images/nodata.svg";
const Home = () => {
  const dispatch = useDispatch();
  const { data: hotel, loading, error } = useSelector((state) => state.hotelDataList);

  useEffect(() => {
    dispatch(hotelInfos());
  }, [dispatch]);

  // Gestion des erreurs
  if (loading) {
    return <p>Chargement des hôtels...</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }
  console.log("Type of myAllData:", Array.isArray(hotel)); // Vérifie si c'est un tableau

  return (
    <>
      <section className="md:max-w-7xl  ">
        <div className="hero__section  relative  ">
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
                  px-[23px]

            "
          >
            <div className="self-start">
              <Soutitre subtitle={"Get inspiration for your next trip"} />
            </div>
            <div
              className="content__inspiration

              sm:grid sm:grid-cols-3 sm:gap-4
              mt-5"
            >
              {hotel.length === 0 ? (
                 <div className="flex items-center justify-center px-5">
                 <div>
                   Standby database, sorry😢😢
                   <img
                     src={nodata}
                     alt="Not data"
                     className="max-w-md max-h-md mt-4 "
                   />
                 </div>
               </div>
              ) : (
                hotel.map((item) => {
                  if (item.featured === true) {
                    // si on passe par une instruction on utilise if
                    return (
                      <div key={item.id}>
                        <AllHotelList item={item} />
                      </div>
                    );
                  }
                  return null;
                })
              )}
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
              {hotel.length === 0 ? (
                <div className="flex items-center justify-center px-5">
                  <div>
                    Standby database, sorry😢😢
                    <img
                      src={nodata}
                      alt="Not data"
                      className="max-w-md max-h-md mt-4 "
                    />
                  </div>
                </div>
              ) : (
                hotel.map((item, index) => {
                  if (item.reviews.length >= 1) {
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
                            <Link to={`/hotels/${item._id}`}> {item.desc} </Link>
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return <p key={index}>Ici on affiche nos meilleurs hotels👌👌 </p>;
                })
              )}
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
