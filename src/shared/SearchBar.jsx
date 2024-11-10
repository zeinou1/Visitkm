import { PiMapPinThin } from "react-icons/pi";
import { LuUserSquare2 } from "react-icons/lu";
import "../shared/search.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
//! dynamique data
import { BASE_URL } from "../utils/config.js";

const SearchBar = () => {
  // show search bar

  const searchRef = useRef(null);
  const btnRef = useRef(null);

  const handleOpen = () => {
    if (searchRef.current.classList.contains("active_search")) {
      btnRef.current.innerHTML = `<i class="ri-search-line text-4xl"></i>`;
    } else {
      btnRef.current.innerHTML = `<i class="ri-close-line"></i>`;
    }
    searchRef.current.classList.toggle("active_search");
  };

  useEffect(() => {
    handleOpen();
  }, []);
  //
  const refLocation = useRef("");
  const refDistance = useRef(0);
  const refGuest = useRef(0);
  // !! search methode
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const location = refLocation.current.value;
    const distance = refDistance.current.value;
    const guesT = refGuest.current.value;

    if (location === "" || distance === "" || guesT === "") {
      alert("please empty valeur");
    }
    
    //search system route API
    const res = await fetch(
      `${BASE_URL}/hotels/search/searchHotel?city=${location}&distance=${distance}&maxGroupSize=${guesT}`
    );
    
    if (!res.ok) alert("Could not find hotel");

    const result = await res.json();

    console.log("search hotel",result);

    //TODO route vers results 
    navigate(
      `/hotel/search?city=${location}&distance=${distance}&maxGroupSize=${guesT}`,
      { state: result.data }
    );
  };

  return (
    <div className="w-full  mb-10  md:w-auto bg-gray-100 dark:bg-black sm: px-4 py-4 rounded-md shadow-xl">
      <button
        className=" md:hidden mx-auto mb-4 flex items-center justify-center  bg-blue-600 shadow-xl p-3 rounded-md text-gray-200 "
        onClick={handleOpen}
        ref={btnRef}
      ></button>

      <div className="hidden search md:block" ref={searchRef}>
        <form >
          <div
            className=" 
          flex items-center justify-center gap-2 flex-col
          lg:grid lg:grid-cols-2
          xl:flex  xl:flex-row xl:items-center xl:justify-around xl:gap-2 w-full
          "
          >
            <div className="form__group input flex items-center justify-center gap-2 input-bordered w-full max-w-xs   ">
              <span className="pl-4 sm:pl-0">
                <PiMapPinThin />
              </span>
              <div>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-gray-200"
                  ref={refLocation}
                />
              </div>
            </div>
            <div className="form__group  input flex items-center justify-center gap-2 input-bordered w-full max-w-xs">
              <span className="pl-4 sm:pl-0">
                <i className="ri-maps-line"></i>
              </span>
              <div className="flex items-center justify-center gap-2">
              <span className="pl-4 sm:pl-0 ">
              <i className="ri-pin-distance-line"></i>
              </span>
                <input
                  type="number"
                  placeholder="Distance"
                  className="bg-gray-200 "
                  ref={refDistance}
                />
              </div>
            </div>

            <div className="form__group input flex items-center justify-center gap-2 input-bordered w-full max-w-xs">
              <span className="pl-4 sm:pl-0 ">
                <LuUserSquare2 />
              </span>
              <div>
                <input
                  type="number"
                  placeholder="Guests"
                  className="bg-gray-200"
                  ref={refGuest}
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="px-4 py-3 rounded-md text-white outline-0   md:col-span-4 bg-blue-600 w-full max-w-xs"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
