import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hotelAdd } from "../Features/Hotel/HotelSlice.jsx";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/config.js";
// import toast

import { toast } from "react-toastify";

const AddHotel = () => {
  const { error } = useSelector((state) => state.hotel);
  console.log(error);
  

  const Success = () => toast.success("Hotel crée avec succès !");
  const errorhotel = () => toast.error("Hotel not created...");
  const formEmpty = () => toast.error("Empty form !");
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile);

  const [hotelData, setHotelData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    photo: "",
    featured: false,
    reviews: [],
  });

  const token = localStorage.getItem("userToken"); // récupérer le token stocké
  if (!token) {
    console.error("Token non trouvé dans le localStorage.");
    return null;
  }
  // const { id, token } = useUser();
  // // console.log("ALL token",id, token);

  // useEffect(() => {
  //   if (id && token) {
  //     // Appel de userProfile avec id et token
  //     dispatch(hotelAdd({ id, token }))
  //       .unwrap()
  //       .then((data) => {
  //         console.log("Error: " + JSON.stringify(data));

  //       })
  //       .catch((error) => {});
  //   }
  // }, [dispatch, id, token]);
  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    setHotelData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : type === "file" ? files[0] : value || "",
    }));
  };

  const handleSubmitHotel = (e) => {
    e.preventDefault();
    console.log(hotelData);
    alert("data hotel submit");
    // console.log("Token vérifié avant dispatch :", token);
     //TODO: les payload sont les charge utilise qu'on passe a notre slice 
    dispatch(hotelAdd({ hotelData, token })).then((result) => {
      if (
        result.payload &&
        result.payload.success === false &&
        result.payload.message === "token is invalid"
      ) {
        console.error("Le token est invalide ou expiré");
        errorhotel();
      } else {
        setHotelData({
          title: "",
          city: "",
          address: "",
          distance: "",
          price: "",
          maxGroupSize: "",
          desc: "",
          photo: "",
          featured: false,
          reviews: [],
        });
      }
    });
  };

  return (
    <section className="max-w-7xl px-[20px] mt-14 bg-gray-100 shadow-xl mb-16 dark:bg-black">
      <div className="mx-auto">
        <div>
          <h6 className="text-center text-2xl font-bold uppercase mb-6 text-blue-600 underline">
            Ajouter un hotel
          </h6>
          <form>
            <div className="md:grid md:grid-cols-3 md:items-center md:justify-center">
              <div className="group__item mb-4">
                <label htmlFor="title" className="text-xl text-green-800 ">
                  Title
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="title"
                  placeholder="Hotel Title"
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>

              <div className="group__item mt-4">
                <label htmlFor="city" className="text-xl pb-10 text-green-800 ">
                  City
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="city"
                  placeholder="Hotel city"
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>
              <div className="group__item mt-4">
                <label htmlFor="address" className="text-xl pb-10 text-green-800 ">
                  address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Hotel address"
                  onChange={handleChange}
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>

              <div className="group__item mt-4">
                <label htmlFor="distance" className="text-xl pb-10 text-green-800 ">
                  Distance
                </label>
                <input
                  type="number"
                  id="distance"
                  placeholder="distance"
                  onChange={handleChange}
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>

              <div className="group__item mt-4">
                <label htmlFor="title" className="text-xl pb-10 text-green-800 ">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  onChange={handleChange}
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>

              <div className="group__item mt-4">
                <label htmlFor="maxGroupSize" className="text-xl pb-10 text-green-800 ">
                  maxGroupSize
                </label>
                <input
                  type="number"
                  id="maxGroupSize"
                  placeholder="maxGroupSize"
                  onChange={handleChange}
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>

              <div className="group__item mt-4">
                <label htmlFor="Description" className="text-xl pb-10 text-green-800 ">
                  Description
                </label>
                <textarea
                  id="desc"
                  placeholder="Description"
                  onChange={handleChange}
                  className="block input border border-gray-900 focus:outline-none mt-2"
                />
              </div>
              <div className="group__item mt-4">
                <label htmlFor="maxGroupSize" className="text-xl pb-10 text-green-800 ">
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  placeholder="Photo"
                  onChange={handleChange}
                  className="file-input file-input-bordered file-input-info w-full max-w-xs"
                />
              </div>
              <div className="group__item  ">
                <label htmlFor="maxGroupSize" className="text-xl pb-10 text-green-800 ">
                  featured
                </label>
                <input
                  type="checkbox"
                  id="featured"
                  checked={hotelData.featured}
                  onChange={handleChange}
                  className="checkbox"
                />
              </div>
            </div>
            <button
              onClick={handleSubmitHotel}
              className="btn mt-6 bg-blue-700 text-white"
            >
              Add Hotel
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddHotel;
