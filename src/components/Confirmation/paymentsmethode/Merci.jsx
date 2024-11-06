import { Link } from "react-router-dom";
import home from "../../../assets/images/img-booking/home.png";
const Merci = () => {
  return (
    <div className="md:max-w-7xl px-[50px] mb-7 mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-6">
      <h6 className="text-4xl text-center mt-8 mx-auto text-blue-600 font-bold md:text-4xl">
        Merci pour votre reservation
      </h6>
      <div className="mt-5 text-center">
        <Link to="/" className="text-center"><span className="text-amber-700 text-2xl bg-slate-950 px-2 py-1 rounded-md">GO to Home page</span></Link>
        <span>
          <img src={home} alt="" className="w-60 h-60 mx-auto mx-5max-w-full max-h-full " />
        </span>
      </div>
    </div>
  );
};
export default Merci;
