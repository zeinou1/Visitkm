import { useDispatch } from "react-redux";
import { deleteUser } from "../Features/UsersSlice/ProfileSlice";
import { useUser } from "../../utils/config";
import { useSelector  } from "react-redux";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ProfileInfos = ({loading, profile}) => {
    console.log("ProfileInfos",profile);
    //? delete user
    const dispatch = useDispatch();
    const {id, token} = useUser();
    const navigate = useNavigate();
 
const handleDelete = () => {
    
        toast.warn(
          ({ closeToast }) => (
            <div className=" ">
              Souhaitez vous vraiment supprimer ton compte?
              <button className="bg-green-700 pl-2 text-center mx-auto"
              onClick={() => {
                dispatch(deleteUser({ id, token }));
                closeToast(); // Ferme le toast après la confirmation
                
              }}>
                <span className="">  Oui  </span>
               {/* navigate to home */}
    
              </button>

              <button onClick={closeToast} className="bg-red-600 pl-4 text-center">Non</button>
            </div>
          ),
          {
            position: "top-center",
            width: "300px",
            autoClose: false,
            closeOnClick: false,
          }
        );
      
}


    return (
        <>
            <section className="max-w-7xl mx-auto px-[0px] mt-14 bg-gray-100 shadow-xl mb-16 dark:bg-black">
                {loading ? (
                    <h3>Chargement du profile en cours...</h3>
                ) : (
                    <div className="container mx-auto">

                        <h6 className="text-center text-blue-600 text-2xl font-bold pb-6">
                            Bienvenue {profile.username}
                        </h6>
                        <div className="border ring-2 solid border-gray-200 ring-inset relative px-5 py-5">
                            <h1>Nom: {profile.username} </h1>
                            <h1>Email: {profile.email} </h1>
                        </div>
                    </div>
                )}
                <div className="flex justify-center">
                    <button  onClick={handleDelete}
                    className="bg-red-500 text-white px-5 py-2 rounded-md"> Delete Account</button>
                </div>
            </section>
        </>
    );
};
ProfileInfos.propTypes = {
    loading: PropTypes.bool.isRequired,
    profile: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProfileInfos;
