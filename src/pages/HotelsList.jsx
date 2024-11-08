// import tours from "../assets/data/tours.js";
// TODO à réfaire ou  importer dans un autre fichier
import loader from '../assets/images/img/loader.svg'
import HotelsCard from "./HotelsCard";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";

const HotelsList = () => {
  // 1 etape 1 searchHotel
  const {
    data: hotelSearch,
    loading,
    error,
  } = useFetch(`${BASE_URL}/hotels/search/searchFeatured`);
  console.log(hotelSearch);

  return (
    <>
      {/* loader */}
      {loading && (
        <div className="loader-container flex items-center justify-center">
          <img src={loader} alt="Loading..." className='w-20 h-20' />
        </div>
      )}
      {/* error */}
      {error && <h4>{error}</h4>}

      {/* Display loader and error message if data not fetched yet */}
      {!loading &&
        !error &&
        hotelSearch.map(
          (
            item //! récupération de donnée via notre API
          ) => (
            <div key={item._id} className="mb-5">
              <HotelsCard data={item} />
            </div>
          )
        )}
    </>
  );
};
export default HotelsList;
