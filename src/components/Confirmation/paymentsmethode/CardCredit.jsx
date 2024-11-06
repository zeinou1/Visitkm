import {  useState } from "react";
import cartB from "../../../assets/images/img-booking/cartb.png";
import cartV from "../../../assets/images/img-booking/cartev.png";
import {useNavigate} from "react-router-dom";


const CardCredit = () => {
  const navigate = useNavigate();
  const [infosCard, setInfosCard] = useState({
    cardName: undefined,
    cardNumber: undefined,
    expMonth: "Janvier",
    expYear: "2024",
    secretNumber: undefined,
  });
  const handleChange = (e) => {
    setInfosCard({ ...infosCard, [e.target.id]: e.target.value });
  };
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(infosCard);

     //! if information is available
     if (
      infosCard.cardName && 
      infosCard.cardNumber && 
      infosCard.expMonth && 
      infosCard.expYear && 
      infosCard.secretNumber
    ) {
      navigate(`/merci`); //? redirect to Merci page
    } else {
      alert("Veuillez Remplir le formulaire");
    }
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="px-3 py-2 bg-gray-200">
          <img
            src={cartB}
            alt=""
            className="w-auto h-auto max-w-full max-h-full object-cover"
          />
        </span>

        <span className="px-3 py-2 bg-gray-200">
          <img
            src={cartV}
            alt=""
            className="w-auto h-auto max-w-full max-h-full object-cover"
          />
        </span>
      </div>

      <div className="form__wrapper w-[500px] mb-4">
        <form className="">
          <div className="form__content">
            <div className="form__group ">
              <label htmlFor="cardName">Name on card</label>
              <input
                onChange={handleChange}
                type="text"
                id="cardName"
                required
                className="input bg-gray-200 w-[320px] block md:w-full mt-6 focus:outline-none focus:border-none"
              />
            </div>
            <div className="form__group mt-4 ">
              <label htmlFor="cardNumber">Debit/Credit card number</label>
              <input
                onChange={handleChange}
                type="number"
                id="cardNumber"
                required
                className="input bg-gray-200 block w-[320px] md:w-full mt-6 focus:outline-none focus:border-none"
              />
            </div>
            <div className="form__group mt-4">
              <h5>Expiration date</h5>
              <div className="lg:flex gap-3">
                <select
                  id="expMonth"
                  onChange={handleChange}
                  required
                  className="input bg-gray-200 block w-[320px] md:w-full mt-6 focus:outline-none focus:border-none"
                >
                  <option value="" onChange={handleChange}>
                    Mois
                  </option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1} id="expMonth"    >
                      {new Date(0, i).toLocaleString("fr-FR", { month: "long" })}
                    </option>
                  ))}
                </select>
                <select
                  required
                  id="expYear"
                  onChange={handleChange}
                  className="input bg-gray-200 block w-[320px]  md:w-full mt-6 focus:outline-none focus:border-none"
                >
                  <option value="" >
                    Année
                  </option>
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i + 2024} value={i + 2024} id="expYear"    onChange={handleChange}>
                      {i + 2024}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form__group mt-4 ">
              <label htmlFor="cardNumber">Code de securité</label>
              <input
                onChange={handleChange}
                type="number"
                id="secretNumber"
                required
                className="input w-[320px] bg-gray-200 block md:w-full mt-6 focus:outline-none focus:border-none"
              />
            </div>
          </div>
          <button 
            className="btn mt-5 w-[320px] lg:w-full bg-black text-white hover:bg-slate-700" 
            onClick={handleSubmit}
            //! deactivate le button si ya pas d information dans le formulaire
            disabled={
              !infosCard.cardName || 
              !infosCard.cardNumber || 
              !infosCard.expMonth || 
              !infosCard.expYear || 
              !infosCard.secretNumber
            }
          >
           Payment
          </button>
        </form>
      </div>
    </>
  );
};

export default CardCredit;
