import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/img-booking/LoginIllustration.png";
import loginavatar from "../assets/images/img-booking/logiInAvatar.png";
import { useState } from "react";
// redux redu
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../components/Features/UsersSlice/LoginSlice.jsx";
import { toast } from "react-toastify";

const Login = () => {
  //! toasty
  const Success = () => toast.success("Compte crée avec succès !");
  const errorMail = () => toast.error("Email non valide...");
  const formEmpty = () => toast.error("Empty form !");
  // ? data connection
  const [login, setLogin] = useState({
    email: undefined,
    password: undefined,
  });
  //! method login
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  // ! connection data
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  // ! Send data connection in the database
  const handleConnect = async (e) => {
    e.preventDefault();

    //! dispatch
    //  dispatch(loginUser(login)).then((result) =>{

    //    if(result.payload && result.payload.data){
    //     console.log("result de result",result.payload.data._id);
    //     if(result.payload.email === null) {
    //       errorMail()
    //     }

    //     navigate(`/users/${result.payload.data._id}`);
    //   }
    //  } )

    dispatch(loginUser(login)).then((result) => {
      if (result.error) {
        if (result.payload?.error === "AddHotel not found") {
          toast.error("Ce compte n'existe pas.");
        } else if (result.payload?.error === "Mot de passe incorrect") {
          toast.error("Mot de passe incorrect.");
        } else {
          toast.error("Erreur lors de la connexion. Veuillez réessayer.");
        }
      } else if (result.payload && result.payload.data) {
       toast.success('Compte connecté!', result.payload.data._id)
      //  console.log("Utilisateur connecté avec succès :", result.payload.data._id);
        navigate(`/users/${result.payload.data._id}`);
      }
    });

    //! si la login passe on passe  coté  header pour afficher les informaton s des utilisateurs
  };
  return (
    <section className="md:max-w-7xl px-[50px] mt-14 bg-gray-100 shadow-xl mb-16 dark:bg-black">
      <div className="border solid border-gray-200 ring-0 ring-inset relative">
        <div className="login__content md:flex gap-3">
          <div className="item__img md:w-[65%] bg-gray-50">
            <img src={loginImg} alt="login img" className="dark:bg-black" />
          </div>

          <div className="login__form md:w-[35%] relative bg-blue-600 mt-16 px-5 ">
            <div className="absolute left-1/2 -top-28 -translate-x-1/2 translate-y-1/2">
              <img src={loginavatar} alt="avatar" className="w-24 h-24 rounded-full " />
            </div>
            <div className="login__form mt-16 ">
              <h5 className="md:text-3xl text-gray-950 mb-8">Login</h5>
              <form className=" pr-3">
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                    onChange={handleChange}
                    className="w-full py-3 px-3 rounded-md mb-4 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleConnect}
                  type="submit"
                  className="btn w-full bg-gray-600 text-lg text-gray-50 mt-3 hover:bg-green-400"
                >
                  Connexion
                </button>
              </form>
            </div>
            <p className="mt-8 text-white text-md">
              {" "}
              Vous n avez pas un compte ?{" "}
              <span className="text-red-400">
                <Link to="/register" className="cursor-pointer ">
                  Créer un compte !
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
