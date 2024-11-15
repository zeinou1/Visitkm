import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../assets/images/img-booking/SignUp.png";
import loginavatar from "../assets/images/img-booking/logiInAvatar.png";
// import useDispatch and addUser
import { useDispatch, useSelector } from "react-redux";

import { addUser } from "../components/Features/UsersSlice/RegisterSlice.jsx";
const Register = () => {
  const Success = () => toast.success("Compte crée avec succès !");
  const errorMail = () => toast.error("Email non valide...");
  const formEmpty = () => toast.error("Empty form !");
  // ? data connection
  const [register, setRegister] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.register);
  console.log(loading);

  // ! Recupe data connection
  const handleChange = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };
  // ! Send data connection
  //! use dispatch  for  register 4
  const handleConnect = async (e) => {
    e.preventDefault();
    if (!register.email || !register.password || !register.username) {
      formEmpty();
    }
    const email = register.email; // Sauvegarder l'email d'origine
    dispatch(addUser(register)).then((result) => {
      if (result.data.payload) {
        if (result.payload.error === "Email already in use") {
          toast.error("Email already in use");
          console.log(error.message);
        } else {
          if (email && /\S+@\S+\.\S+/.test(email)) {
            setRegister(result.payload);
            
          } else {
            errorMail();
          }
        }
      }
     
    });
  };

  return (
    <section className="md:max-w-7xl px-[50px] mt-14 bg-gray-100 shadow-xl mb-16">
      <div className="border solid border-gray-200 ring-0 ring-inset relative">
        <div className="login__content md:flex gap-3">
          <div className="item__img md:w-[65%] bg-gray-50">
            <img src={loginImg} alt="" />
          </div>

          <div className="login__form md:w-[35%] relative bg-blue-200 mt-16 px-5 ">
            <div className="absolute left-1/2 -top-28 -translate-x-1/2 translate-y-1/2">
              <img src={loginavatar} alt="avatar" className="w-24 h-24 rounded-full " />
            </div>
            <div className="login__form mt-16 ">
              <h5 className="md:text-3xl text-gray-350 mb-8">Sign Up</h5>
              <form className="">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Name"
                    id="username"
                    name="username"
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
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-full bg-gray-600 text-lg text-gray-50 mt-3 hover:bg-green-400"
                  onClick={handleConnect}
                >
                  {loading ? "Loading..." : " Créer un compte"}
                </button>
              </form>
            </div>
            <div className="mt-8 text-gray-600 text-md ">
            Vous avez déjà un compte ?{" "}
              <span className="text-red-400">
                <Link to="/login" className="cursor-pointer ">
               <button className="btn btn-secondary bg-gray-900 w-full text-white dark:text-white mb-4">
               Login 
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
