import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hotelAdd } from "../Features/Hotel/HotelSlice.jsx";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/config.js";
// import toast

import { toast } from "react-toastify";
// import cloudinary
import uploadImageCloudinary from "../../utils/uploadCloudinary.js";

const AddHotel = ({profile}) => {
  // Gestion importation image
  const [selectedFile, setSelectedFile] = useState(null)
  const [displayFile, setDisplayFile] = useState(null)
  // End importation image
  const { error } = useSelector((state) => state.hotel);
  console.log(error);
  

  const Success = () => toast.success("Hotel crée avec succès !");
  const errorhotel = () => toast.error("Hotel not created...");
  const formEmpty = () => toast.error("Empty form !");
  const dispatch = useDispatch();

  // const profile = useSelector((state) => state.profile);

  const [hotelData, setHotelData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    photo: "selectedFile",
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
    const { id, value, type, checked } = e.target;
    setHotelData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value || "",
    }));
  };

  const inputFileChange = async (e) => {
    console.log("test value imf", e.target.files)
    const file = e.target.files[0]
    console.log(file)
    const data = await uploadImageCloudinary(file)
    setDisplayFile(data.url)
    setSelectedFile(data.url)
    setHotelData({...hotelData, photo: data.url})
  }
  const handleSubmitHotel = (e) => {
    e.preventDefault();
    console.log(hotelData);
    // alert("data hotel submit");
    // console.log("Token vérifié avant dispatch :", token);
     //TODO: les payload sont les charge utilise qu'on passe a notre slice

    dispatch(hotelAdd({ hotelData, token }))
    .then(() => {
      toast.success("Hotel add succefully !")
    })
    .catch(()=> {
      toast.error('Failled to add hotel')
    })
  };

  return (
    <section className="max-w-7xl px-[20px] mt-14 bg-gray-100 shadow-xl mb-16 dark:bg-black">
      <div className="mx-auto relative">
        <div>
          <div className="">
            <h6 className="text-left text-2xl font-bold uppercase mb-6 text-blue-600 underline">
              Ajouter un hotel
            </h6>
            <h5 className="absolute right-1 -top-20  text-xl font-bold  mb-6 text-gray-900 underline">Nom admin hotel: {profile.username}</h5>
          </div>
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
                    accept=".jpg, .png, .jpeg, .webp"
                    onChange={inputFileChange}
                    className="w-full max-w-xs"
                />
                {selectedFile && <figure
                    className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={displayFile} alt="" className="w-full rounded-full"/>
                </figure>
                }
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
                    className=""
                />
              </div>
            </div>
            <button
                onClick={handleSubmitHotel}
                className="btn mt-6 bg-blue-700 text-white"
            >
              Add Hotel
            </button>
            <div className="displayphoto">

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};
export default AddHotel;
