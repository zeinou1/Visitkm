import { FaMapMarkerAlt } from "react-icons/fa";
import maps from "../images/img-booking/maps.png";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";

import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "../utils/config.js";
import useFetch from "../hooks/useFetch.js";
import calculateAvgRating from "../utils/avgRating";
import { useRef, useEffect } from "react";
import { IoStarOutline } from "react-icons/io5";
import avatar from "../assets/images/img-booking/avatar.png";
//! Reservation
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux"
// avis methode
// import { AuthContext } from "../context/AuthContext.jsx";
// toastify
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HotelDetails = () => {
  // gestion  avis
  const [showAvis, setShowAvis] = useState("Vue generale");
  // useparams pour la récupération de l Id afin d afficher les données
  const { id } = useParams();
  // Recupération de donnée par detructuration
  const { data: DataHotel, loading, error } = useFetch(`${BASE_URL}/hotels/${id}`);
  // console.log("HotelInfos", DataHotel);
  //token
  const token = localStorage.getItem('userToken');
  const {
    title = "",
    photo = "",
    reviews = [],
    city = "",
    address = "",
    desc = "",
    // caracteristique,
    distance = "",
    price = 0,
    maxGroupSize = 0,
  } = DataHotel || {}; //! static
  
  // Met à jour le nom de l'hôtel dans formReservation lorsque DataHotel change
  useEffect(() => {
    if (title) {
      setFormReservation((prevState) => ({
        ...prevState,
        hotelName: title,  // Mise à jour du nom de l'hôtel dynamiquement
      }));
    }
  }, [title]);  // Dépend de `title` pour mettre à jour quand DataHotel est chargé

  //!Vue générale

  // format date etape => 13
  const formDateAvis = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // recupération data reviews => use useref and useState etape=>14
  const avisRef = useRef("");
  const [hotelRating, setHotelRating] = useState(null);
  //TODO envoie de donneé  avis
  //! add avis  to use DataBase
  const { user } = useSelector((state)=> state.user)
  console.log(user);
  

  const handleSubmitAvis = async (e) => {
    e.preventDefault();
    const reviewText = avisRef.current.value; // meme nom que celui du schemas sinon bug

    // alert(`${textRating} , ${hotelRating}`); // test recup donnée

    try {
      //TODO renvoie de l'utilisateur if is not connected
      if (!user || user === undefined || user === null) {
        alert("Pour laisser un avis connect toi");
        return;
      }
      //! Objet rating
      const objAvis = {
        username: user?.username,
        reviewText, //! le formulaire donnée
        rating: hotelRating, //
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`,
        },
        credentials: "include", //! cookies save
        body: JSON.stringify(objAvis),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
    } catch (error) {
      alert("Avis erreur submited: " + error.message);
    }
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  //! End vue Générale méthode

  //TODO :End Méthode Avis

  const navigate = useNavigate();
  //? test useForm
  const { register } = useForm();

  /**
   *
   *TODO:  recuperation information de reservation formulaire
   *? using useState
   */
  const [formReservation, setFormReservation] = useState({
    userId: user && user._id, //! a récuperer dynamiquement aprés
    email: user && user.email,
    hotelName: title,
    fullName: "",
    phone: "",
    bookAt: "",
    guestSize: 1,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormReservation({ ...formReservation, [e.target.id]: e.target.value });
  };
  //TODO End récupéartion des informations
  /**
   * TODO: send Data information to backend
   */
  //! dynamically API reservation
  
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formReservation);
    //! if information is available
    try {
      //TODO! verifie si l utilisateur existe et bien connnecté
      if(!formReservation < 0 ) {
        alert("Veilleur remplir le formulaire et vous connectez")
      }



      const res = await fetch(`${BASE_URL}/booking`, {
        
        method: "post",
        headers: { "content-type" : "application/json",
          authorization: `Bearer ${token}`,
         },
        credentials: "include",
        body: JSON.stringify(formReservation),
      });
       // test user undefined
       if (!user) {
        toast.error("Veuillez vous connecter pour faire une réservation")
        navigate('/login');
        return false;
      }

      //? test result
      const result = await res.json();
      if (!res.ok) {
        return console.log(result.message);
      }
     
      navigate(`/confirmation/${id}`, {
        state: { hotelData: DataHotel, reservationData: formReservation },
      }); //? recup id hotel et les informations de reservation
      toast.success("Reservation submit successfully")
    } catch (error) {
      alert(error.message);
    }
  };
  //TODO! End send Data information to backend

  /*
  TODO: Calcul total inclued serces charge 
  */
  //? Calculs service charge and totalPrice
  const serviceCharge = 10;

  const totalPrice = Number(price) * Number(formReservation.guestSize) + Number(serviceCharge);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [DataHotel]);

  return (
    <>
      <section className="md:max-w-7xl md:px-[50px] mt-10 mx-auto">
        {loading && <h4 className="text-center">Chargement en cours....</h4>}
        {error && <h4 className="text-center">{error}</h4>}
        {!loading && !error && (
          <div className="container">
            <div className="w-full">
              <div className="md:flex md:justify-between md:items-center md:gap-2">
                <div className="md:w-[65%] ">
                  <img src={photo} alt={title} className="md:h-[456px] rounded-md" />
                </div>
                <div className="md:w-[35%] flex flex-col gap-5 justify-center items-center">
                  <div className="mt-4 sm:mt-0">
                    <img src={photo} alt="" className="w-[400px] h-[218px] rounded-md " />
                  </div>
                  <div>
                    <img src={photo} alt="" className="w-[400px] h-[218px] rounded-md" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 shadow-xl">
              <div className=" flex gap-3">
                <button
                  onClick={() => setShowAvis("Vue generale")}
                  className={`${
                    showAvis === "Vue generale" && "border-b-2 border-blue-500"
                  } py-2 px-5 mr-5 text-[16px] leading-6 text-gray-950 font-semibold dark:text-white`}
                >
                  Vue generale
                </button>
                <button
                  onClick={() => setShowAvis("Avis")}
                  className={`${
                    showAvis === "Avis" && "border-b-2 border-blue-500"
                  } py-2 px-5 mr-5 text-[16px] leading-6 text-gray-950 font-semibold dark:text-white`}
                >
                  Avis
                </button>
              </div>
            </div>
            <div className="mt-[50px] bg-[#F4F4F4] ">
              {}
              {/* {showAvis === "Vue generale" && <Vuegenerale/>} */}
              {showAvis === "Vue generale" && (
                <div className="md:flex gap-3 dark:bg-black ">
                  <div className="md:w-[65%] ">
                    <div className="flex flex-col space-x-1 gap-[12px] pt-4 pl-5">
                      <h3 className="text-[22px] font-[600] tracking-tight dark:text-white">
                        {title}
                      </h3>
                      <div className="flex gap-2">
                        <span className="flex gap-1 items-center justify-cente dark:text-white">
                          {Array.from({ length: 4 }, (_, index) => (
                            <i
                              key={index}
                              className={
                                index < avgRating
                                  ? "ri-star-line text-yellow-500"
                                  : "text-white"
                              }
                            ></i>
                          ))}
                        </span>
                        <span className="card-infos flex items-center gap-1">
                          <span className="">
                            <i className="ri-star-line"></i>
                          </span>
                          {avgRating === 0 ? null : avgRating}

                          {totalRating === 0 ? (
                            "0 avis"
                          ) : (
                            <span>({reviews?.length || 0})</span>
                          )}
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
                            <span className="text-xl text-blue-500">
                              {" "}
                              € {price}
                            </span> /{" "}
                            <span className="text-sm text-gray-500"> personne</span>
                          </div>
                          <div>
                            {" "}
                            <span className="text-xl text-blue-500">
                              <i className="ri-group-line"></i> {maxGroupSize} -{" "}
                              <span className="text-lg text-gray-500"> Max</span>
                            </span>
                          </div>
                          <div>
                            {" "}
                            <span className="text-xl text-blue-500">
                              <i className="ri-pin-distance-line"></i> {distance}
                            </span>{" "}
                            <span className="text-sm text-gray-500"> k/m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-0 mb-36 dark:bg-black">
                      <div className="p-[30px] ">
                        <h6 className="text-gray-900 dark:text-white pt-5">Apercu</h6>
                        <div className="">
                          <p className="pt-5">
                            <span className="text-lg font-bold text-blue-700">
                              {desc}
                            </span>
                            , Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dicta, cupiditate, labore ipsam voluptatibus consequatur ipsa
                            officia pariatur nam sed vero explicabo! Rem modi porro, sequi
                            magnam iure hic aliquam ab ut quod eos quia fugit ad error
                            natus, animi ullam!
                          </p>
                          <br></br>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Reiciendis, cum laborum! Voluptate.
                          </p>
                        </div>
                      </div>
                      <div className="featured border-t-2 ">
                        <div className="mt-7 p-[30px]">
                          <h6 className="dark:text-white">Top facilities</h6>
                          <div>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[35%]">
                    <div>
                      <div className="pt-4">
                        <img src={ maps} alt="maps" />
                      </div>
                    </div>
                    {/* reservation form */}
                    {/* <Reserver data={DataHotel} calculateAvgRating={calculateAvgRating} /> */}
                    <div className="reserver mt-4 px-2">
                      <div className="flex justify-between items-center">
                        <h3 className="">
                          {" "}
                          <span className="text-2xl font-semibold text-blue-600">
                            € {price}
                          </span>
                          <span className="text-sm text-gray-400">/ personne </span>
                        </h3>
                        <span className="card-infos flex items-center gap-1">
                          <span className="text-yellow-400">
                            <i className="ri-star-line"></i>
                          </span>
                          <span>{avgRating === 0 ? null : avgRating}</span>

                          {totalRating === 0 ? (
                            "0 avis"
                          ) : (
                            <span>({reviews?.length || 0})</span>
                          )}
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
                              id="fullName"
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
                              placeholder="Téléphone"
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
                              id="bookAt"
                              required
                              onChange={handleChange}
                              className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
                            />
                            <input
                              type="number"
                              placeholder=" Inviter"
                              id="guestSize"
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
                              <span>
                                € {formReservation.guestNumber <= 0 ? 0 : totalPrice}
                              </span>
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
                  </div>
                </div>
              )}

              {showAvis === "Avis" && (
                <div className="p-[30px]">
                  <h3> Avies ({reviews?.length} Avies) </h3>
                  <form className="form__content" onSubmit={handleSubmitAvis}>
                    <div className="flex mt-3 gap-1 items-center  ">
                      <i className="ri-arrow-right-line"></i>
                      <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setHotelRating(1)}
                      >
                        1
                        <span className="text-yellow-400">
                          <i className="ri-star-line"></i>
                        </span>
                      </span>
                      <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setHotelRating(2)}
                      >
                        2{" "}
                        <span className="text-yellow-400">
                          <i className="ri-star-line"></i>
                        </span>
                      </span>
                      <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setHotelRating(3)}
                      >
                        3{" "}
                        <span className="text-yellow-400">
                          <i className="ri-star-line"></i>
                        </span>
                      </span>
                      <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setHotelRating(4)}
                      >
                        4{" "}
                        <span className="text-yellow-400">
                          <i className="ri-star-line"></i>
                        </span>
                      </span>
                      <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setHotelRating(5)}
                      >
                        5{" "}
                        <span className="text-yellow-400">
                          <i className="ri-star-line"></i>
                        </span>
                      </span>
                    </div>
                    <div className="input__content flex items-center px-4 py-2 rounded-md  justify-between gap-4 w-1/2 bg-gray-200  mt-3 border-b-2 border-blue-300 ">
                      <input
                        ref={avisRef}
                        className="py-3  focus:outline-none w-full bg-gray-200 text-black"
                        type="text"
                        id="name"
                        placeholder="Donner votre avis"
                        required
                      />
                      <button
                        type="submit "
                        className="text-gray-50 bg-yellow-700 px-3 py-2 rounded-md hover:bg-yellow-800"
                      >
                        {" "}
                        Envoyer{" "}
                      </button>
                    </div>
                  </form>
                  {/* ========Display avis========= */}
                  <div className="avis__content py-10 w-[70%]  ">
                    {reviews?.map((element) => (
                      <div key={element._id} className="avis__body flex gap-4 pt-5">
                        <img
                          src={avatar}
                          alt={element.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="w-full   ">
                          <div className="flex items-center justify-between gap-5 ">
                            <div className="flex flex-col gap-3">
                              {/* map element */}
                              <h5>{element.username}</h5>
                              <p>
                                {new Date(element.createdAt).toLocaleDateString(
                                  "fr-FR",
                                  formDateAvis
                                )}
                              </p>
                            </div>
                            <span className="flex items-center ">
                              {element.rating}
                              <IoStarOutline />
                            </span>
                          </div>
                          <h6>{element.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      <section className="max-w-7xl px-[50px] mt-10 mx-auto">
        <Newsletter />
      </section>
    </>
  );
};
export default HotelDetails;
