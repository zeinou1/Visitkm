/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import calculateAvgRating from "../utils/avgRating";
const HotelsCard = ({ data }) => {
  //! changement de l id pour récuperer l id dans la base d donnée
  const {
    title,
    city,
    price,
    reviews,
    photo,
    _id, 
    promotion,
  } = data;
  // console.log(data);
  
  
  const { avgRating, totalRating } = calculateAvgRating(reviews);
  // calculate totalRating

  return (
    <div className="card w-auto shadow-xl rounded-md dark:border-2 dark:border-gray-700">
      <div className="relative">
        <figure>
          <img src={photo} alt={title} className="rounded-md w-full sm:h-48 object-cover" />
          <span className="">
            {promotion && (
              <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-sm transform rotate-6">
                {promotion}
              </span>
            )}
          </span>
        </figure>
      </div>

      <div className="card-body px-3 p-5">
        <div className="card__top flex justify-between items-center">
          <span className="card-infos flex items-center gap-2">
            <span className="text-blue-500">
              <FaMapMarkerAlt />
            </span>
            {city}
          </span>
          <span className="card-infos flex items-center gap-1">
            <span className="text-yellow-600">
              <IoStarOutline />
            </span>
            {avgRating === 0 ? null : avgRating}

            {totalRating === 0 ? "0 avis" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="link__title">
          <Link to={`/hotels/${_id}`} className="hover:text-blue-600 dark:text-white">
            {title}
          </Link>
        </h5>
        <div className="card-bottom flex items-center justify-between mt-4">
          <h5 className="">
            <span className="text-sm text-gray-500"></span>
            <span className="text-xl text-blue-500"> {price} €</span>{" "}
          </h5>
          <button className="text-gray-50 bg-blue-700 px-3 py-2 rounded-md hover:bg-yellow-800">
            <Link to={`/hotels/${_id}`}>Reserver</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HotelsCard;
