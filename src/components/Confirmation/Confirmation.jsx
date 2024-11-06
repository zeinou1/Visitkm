import { useState } from "react";
import Paypal from "./paymentsmethode/Paypal";
import CardCredit from "./paymentsmethode/CardCredit";
import { useLocation } from "react-router-dom";
import Onsite from "./paymentsmethode/Onsite";

import calculateAvgRating from "../../utils/avgRating";

const Confirmation = () => {
  //! tabs paysments
  const [tabs, settTabs] = useState("Debit/Credit Card");

  // ? recupe infos hotel
  const location = useLocation(); //! Récupère les données transmises via navigate
  const { hotelData} = location.state || {};

  const { totalRating, avgRating } = calculateAvgRating(hotelData.reviews);
  const serviceCharge = 10;

  return (
    <section className="max-w-7xl px-[50px] mb-7 ">
      <div className="containe-r">
        <div className="payment__wrapper lg:flex lg:gap-10">
          <div className="payment__infos  lg:w-[70%] shadow-xl  bg-white rounded-lg">
            <div className=" px-9 py-3  bg-[#2F80ED] rounded-t-lg">
              <span className="text-white">
                {" "}
                <i className="ri-bank-card-line"></i>
              </span>{" "}
              <span className="pl-3 text-white">Payment options</span>
            </div>
            <div className="mt-4 shadow-xl   ">
              <div className="ml-[32px] flex gap-4 pb-3 ">
                <button onClick={() => settTabs("Debit/Credit Card")}>
                  Debit/Credit Card
                </button>
                <button onClick={() => settTabs("Paypal")}>Paypal</button>
                <button onClick={() => settTabs("Sur place")}>Sur place</button>
              </div>
            </div>
            <div className="mt-[43px] ml-[32px] mb-7 ">
              {tabs === "Paypal" && <Paypal />}
              {tabs === "Debit/Credit Card" && <CardCredit />}
              {tabs === "Sur place" && <Onsite />}
            </div>
          </div>

          <div className=" lg:w-[30%] shadow-xl">
            <div className="hotel__infos">
              <div className="">
                <img src={hotelData.photo} alt="" />
              </div>
              <div className="pl-6 pt-3 mx-auto w-full pr-4">
                <h5>{hotelData.title}</h5>
                <div className="flex gap-2">
                  <span className="flex gap-1 items-center justify-cente">
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
                      <span>({hotelData.reviews.length} avis) </span>
                    )}
                  </span>
                </div>
                <div className="mt-8">
                  <h6 className="text-sm text-red-600 mb-3 ">Non refundable</h6>
                  <p className="mb-3 text-[14px] font-[400]">
                    Check in: Sunday, March 18, 2022
                  </p>
                  <p className="mb-3 text-[14px] font-[400]">
                    Check out: Tuesday, March 20, 2022
                  </p>
                  <span className="text-[14px] font-[400]">1 night stay</span>
                </div>
                <div className="reservation__bottom mt-2 bg-yellow-400 rounded-md px-4 py-3">
                  <div className="list__group">
                    <div className="item__group flex justify-between items-center mb-3">
                      <h5 className="">
                        €{hotelData.price} <i className="ri-close-line"></i> 1 personne
                      </h5>
                      <span>€{hotelData.price}</span>
                    </div>
                    <div className="item__group charge flex justify-between items-center mb-2">
                      <h5> Service charge </h5>
                      <span>€{serviceCharge}</span>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Confirmation;
