import { useState, useEffect } from "react";
import SectionCommon from "../shared/SectionCommun";
import Newsletter from "../shared/Newsletter";
import HotelsCard from "../pages/HotelsCard";
//! data source
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import {useSelector,useDispatch} from "react-redux";
import {hotelInfos} from "../components/Features/Hotel/HotelListSlice.jsx"; //! api/v1

const Hotel = () => {
  const dispatch = useDispatch()
  // pagination
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  // ? Get data from  API
  const {
    data: dataHotels,
    loading,
    error,
  } = useFetch(`${BASE_URL}/hotels?page=${page}`);
  const { data: countAllHotels } = useFetch(`${BASE_URL}/hotels/search/countHotel`);
  
  // console.log(dataHotels);

  useEffect(() => {
    const pages = Math.ceil(countAllHotels / 8); //! use data for backend
    setPageCount(pages); // ? data for backend displayed
    window.scrollTo(0, 0);
  }, [page, countAllHotels, dataHotels]); // use dependency

  return (
    <>
      <section className="max-w-7xl px-[50px] ">
        <div className="mb-[100px] ">
          <SectionCommon title="Nos hotels" />
        </div>
        {loading && <h4 className="text-center"> Loading...</h4>}
        {error && <h4>{error}</h4>}
        {/* Hotels List */}

        {!loading && !error && (
          <div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-10">
              {dataHotels.map((item) => (
                <div key={item._id}>
                  <HotelsCard data={item} />
                </div>
              ))}
            </div>
            <div className="w-full">
              <div className="pagination text-black flex items-center justify-center mt-10 gap-3">
                {/* Pagination methode */}
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={
                      page === number
                        ? "active"
                        : "w-8 h-8 border solid border-yellow-600 rounded-full flex items-center justify-center cursor-pointer"
                    }
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <Newsletter />
    </>
  );
};
export default Hotel;
