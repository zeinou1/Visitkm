/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Reserver = ({ data, calculateAvgRating }) => {
  const { price, reviews } = data;

  const { user } = useSelector((state)=> state.user)
  console.log("Utilisateur test",user);
  
  const { avgRating, totalRating } = calculateAvgRating(reviews);
  const navigate = useNavigate();
  //? test useForm
  const { register } = useForm();
  /**
   *
   *TODO:  recuperation information de reservation
   *? using useState
   */
  const [credentials, setCredentials] = useState({
    userId: user && user._id, //! a récuperer dynamiquement aprés
    email: "zarios@gmail.com",
    name: "",
    phone: "",
    dateEntree: "",
    guestNumber: 1,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };
  //? End récupéartion des informations
  /**
   * TODO: send Data information to backend
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    //! if information is available
    if (
      credentials.name &&
      credentials.email &&
      credentials.phone &&
      credentials.dateEntree &&
      credentials.guestNumber > 0
    ) {
      navigate(`/confirmation/${data.id}`, {
        state: { hotelData: data, reservationData: credentials },
      }); //? recup id hotel et les informations de reservation
    } else {
      alert("Veuillez Remplir le formulaire");
    }
  };
  //? End send Data information to backend
  /*
  TODO: Calcul total inclued serces charge 
  */
  const serviceCharge = 10;
  const totalPrice =
    Number(price) * Number(credentials.guestNumber) + Number(serviceCharge);

  return (
    <div className="reserver mt-4 px-2">
      <div className="flex justify-between items-center">
        <h3 className="">
          {" "}
          <span className="text-2xl font-semibold text-blue-600">€ {price}</span>
          <span className="text-sm text-gray-400">/ personne </span>
        </h3>
        <span className="card-infos flex items-center gap-1">
          <span className="text-yellow-400">
            <i className="ri-star-line"></i>
          </span>
          <span> {avgRating === 0 ? null : avgRating}</span>

          {totalRating === 0 ? "0 avis" : <span className="">({reviews.length})</span>}
        </span>
      </div>
      {/*  form reservation */}
      <div className="revervation__form mt-4 sticky border solid  py-5 px-2 border-gray-800 rounded-md">
        <h6>Information de reservation</h6>

        <form className="info__reservation mt-4 px-3 border solid  py-5 border-gray-300 rounded-md">
          <div className="form__group">
            <input
              {...register("name")} //? useForm test instead
              placeholder="Nom complet"
              id="name"
              required
              onChange={handleChange}
              className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handleChange}
              className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Télephone"
              id="phone"
              required
              onChange={handleChange}
              className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
            />
          </div>
          <div className="form__group flex items-center gap-4">
            <input
              type="date"
              placeholder=""
              id="dateEntree"
              required
              onChange={handleChange}
              className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
            />
            <input
              type="number"
              placeholder=" Inviter"
              id="guestNumber"
              required
              onChange={handleChange}
              className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
            />
          </div>
        </form>
        <div className="reservation__bottom mt-2">
          <div className="list__group">
            <div className="item__group flex justify-between items-center mb-3">
              <h5 className="">
                €{price} <i className="ri-close-line"></i> 1 personne
              </h5>
              <span>€{price}</span>
            </div>
            <div className="item__group charge flex justify-between items-center mb-2">
              <h5> Service charge </h5>
              <span>€{serviceCharge}</span>
            </div>
            <div className="item__group total flex justify-between items-center">
              <h5> Total</h5>
              <span>€ {credentials.guestNumber <= 0 ? 0 : totalPrice}</span>
            </div>
          </div>
          <button
            className="btn w-full bg-blue-600 text-lg text-white mt-3 hover:bg-blue-700"
            onClick={handleSubmit}
          >
            {" "}
            Reserver
          </button>
        </div>
      </div>
      {/* End form reservation */}
    </div>
  );
};
export default Reserver;
