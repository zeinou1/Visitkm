import { useDispatch } from "react-redux";
import { deleteUser } from "../Features/UsersSlice/ProfileSlice";
import { useUser } from "../../utils/config";

const ProfileInfos = ({loading, profile}) => {
    console.log("ProfileInfos",profile);
    //? delete user
    const dispatch = useDispatch();
    const {id, token} = useUser();

    const handleDelete = () => {
        dispatch(deleteUser({id, token}))
    }


    return (
        <>
            <section className="max-w-7xl px-[0px] mt-14 bg-gray-100 shadow-xl mb-16 dark:bg-black">
                {loading ? (
                    <h3>Chargement du profile en cours...</h3>
                ) : (
                    <div className="container mx-auto">

                        <h6 className="text-center text-blue-600 text-2xl font-bold pb-6">
                            Bienvenu sur votre profil
                        </h6>
                        <div className="border ring-2 solid border-gray-200 ring-inset relative px-5 py-5">
                            <h1>Nom: {profile.username} </h1>
                            <h1>Email: {profile.email} </h1>
                        </div>
                    </div>
                )}
                <div className="flex justify-center">
                    <button 
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-5 py-2 rounded-md"> Delete Account</button>
                </div>
            </section>
        </>
    );
};

export default ProfileInfos;