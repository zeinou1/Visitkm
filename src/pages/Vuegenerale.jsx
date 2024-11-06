/* eslint-disable react/prop-types */
import calculateAvgRating from "../utils/avgRating";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GrBusinessService } from "react-icons/gr";
import Reserver from "../components/Reservation/Reserver"
const Vuegenerale = ({ hotelData }) => {
  /**
   * 
   */
  if (!hotelData) return null;
  console.log("test",hotelData);
  
  const {
    title,
    reviews,
    city,
    address,
    desc,
    maps,
    // caracteristique,
    distance,
    price,
    maxGroupSize,
  } = hotelData;
  //recuperation avis
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <>
      <div className="md:flex gap-3 dark:bg-black ">
        <div className="md:w-[65%] ">
          <div className="flex flex-col space-x-1 gap-[12px] pt-4 pl-5">
            <h3 className="text-[22px] font-[600] tracking-tight dark:text-white">{title}</h3>
            <div className="flex gap-2">
              <span className="flex gap-1 items-center justify-cente dark:text-white">
                {Array.from({ length: 4 }, (_, index) => (
                  <i
                    key={index}
                    className={
                      index < avgRating ? "ri-star-line text-yellow-500" : "text-white"
                    }
                  ></i>
                ))}
              </span>
              <span className="card-infos flex items-center gap-1">
                <span className="">
                  <i className="ri-star-line"></i>
                </span>
                {avgRating === 0 ? null : avgRating}

                {totalRating === 0 ? "0 avis" : <span>({reviews.length})</span>}
              </span>
            </div>
            <div className=" mb-[50px]">
              <span className="flex gap-1 items-center text-sm">
                <FaMapMarkerAlt className="text-blue-500 w-[20px] h-[20px] mr-3" />{" "}
                <span className="text-sm font-[200]">{city}</span>,{" "}
                <span className="text-sm font-[200]">{address}</span>
              </span>
              <hr className="mt-7" />
              <div className="mt-4 flex justify-between items-center gap-5 bg-gray-200 dark:bg-gray-900 p-8">
                <div>
                  {" "}
                  <span className="text-xl text-blue-500"> € {price}</span> / <span className="text-sm text-gray-500"> personne</span>
                </div>
                <div>
                  {" "}
                  <span className="text-xl text-blue-500"><i className="ri-group-line"></i> {maxGroupSize} - <span className="text-lg text-gray-500"> Max</span></span> 
                </div>
                <div>
                  {" "}
                  <span className="text-xl text-blue-500"><i className="ri-pin-distance-line"></i> {distance}</span> <span className="text-sm text-gray-500"> k/m</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-0 mb-36 dark:bg-black">
            <div className="p-[30px] ">
              <h6 className="text-gray-900 dark:text-white pt-5">Apercu</h6>
              <div className="">
                <p className="pt-5">
                  <span className="text-lg font-bold text-blue-700">{desc}</span>, Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Dicta, cupiditate,
                  labore ipsam voluptatibus consequatur ipsa officia pariatur nam sed vero
                  explicabo! Rem modi porro, sequi magnam iure hic aliquam ab ut quod eos
                  quia fugit ad error natus, animi ullam!
                </p>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
                  cum laborum! Voluptate.
                </p>
              </div>
            </div>
            <div className="featured border-t-2 ">
              <div className="mt-7 p-[30px]">
                <h6 className="dark:text-white">Top facilities</h6>
                <div>
                  {/* <ul className="grid grid-cols-2 ">
                    {caracteristique.map((crt) => (
                      <li key={crt} className="no-underline ">
                        {crt === "wifi" ? (
                          <span className="flex items-center gap-3">
                            <FaWifi />
                            {crt}
                          </span>
                        ) : crt === "parking" ? (
                          <span className="flex items-center gap-3">
                            <FaParking />
                            {crt}
                          </span>
                        ) : crt === "pool" ? (
                          <span className="flex items-center gap-3">
                            <FaSwimmingPool />
                            {crt}
                          </span>
                        ) : crt === "business-services" ? (
                          <span className="flex items-center gap-3">
                            <GrBusinessService />
                            {crt}
                          </span>
                        ) : crt === "aircondition" ? (
                          <span className="flex items-center gap-3">
                            <TbAirConditioning />
                            {crt}
                          </span>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35%]">
          <div>
            <div className="pt-4">
              <img src={maps} alt="" />
            </div>
          </div>
          {/* <Reserver data = {item} calculateAvgRating={calculateAvgRating} /> */}
        </div>
      </div>
    </>
  );
};
export default Vuegenerale;
