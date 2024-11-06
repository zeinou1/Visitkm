/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { IoStarOutline } from "react-icons/io5";
import avatar from "../assets/images/img-booking/avatar.png";
const AvisG = ({ item }) => {
  const { reviews } = item;
  // format date etape => 13
  const formDateAvis = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // recupération data reviews => use useref and useState etape=>14
  const avisRef = useRef("");
  const [hotelRating, setHotelRating] = useState(null);
  // envoie de donneé  avis
  const handleSubmit = (e) => {
    e.preventDefault();
    const textRating = avisRef.current.value;
    alert(`${textRating} , ${hotelRating}`); // test recup donnée
  };
  return (
    <div>
      <div>
        <div className="p-[30px]">
          <h3> Avies ({reviews?.length} / 5) </h3>
          <form className="form__content" onSubmit={handleSubmit}>
            <div className="flex mt-3 gap-1 items-center  ">
            <i className="ri-arrow-right-line"></i>
              <span className="flex items-center gap-1 cursor-pointer" onClick={() => setHotelRating(1)} 
                
                >
                1
                <span className="text-yellow-400">
                <i className="ri-star-line"></i>
                </span>
              </span>
              <span className="flex items-center gap-1 cursor-pointer" onClick={() => setHotelRating(2)}>
                2{" "}
                <span className="text-yellow-400">
                <i className="ri-star-line"></i>
                </span>
              </span>
              <span className="flex items-center gap-1 cursor-pointer" onClick={() => setHotelRating(3)}>
                3{" "}
                <span className="text-yellow-400">
                <i className="ri-star-line"></i>
                </span>
              </span>
              <span className="flex items-center gap-1 cursor-pointer" onClick={() => setHotelRating(4)}>
                4{" "}
                <span className="text-yellow-400">
                <i className="ri-star-line"></i>
                </span>
              </span>
              <span className="flex items-center gap-1 cursor-pointer" onClick={() => setHotelRating(5)}>
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
                name="name"
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
              <div key={element.name} className="avis__body flex gap-4">
                <img src={avatar} alt={element.name} className="w-16 h-16 rounded-full" />
                <div className="w-full   ">
                  <div className="flex items-center justify-between gap-5 ">
                    <div className="flex flex-col gap-3">
                      <h5>zeinou</h5>
                      <p>
                        {new Date("2024-10-16").toLocaleDateString("fr-FR", formDateAvis)}
                      </p>
                    </div>
                    <span className="flex items-center ">
                      5<IoStarOutline />
                    </span>
                  </div>
                  <h6>supper appartement</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvisG;
