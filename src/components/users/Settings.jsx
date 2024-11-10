import {useDispatch, useSelector} from "react-redux";
import {useState,useEffect} from "react";
import {updateUser} from '../Features/UsersSlice/ProfileSlice.jsx'
import {useUser} from "../../utils/config.js"
import {toast} from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';
const Settings = ({profile}) => {

    // toast

    const token = localStorage.getItem("userToken")
    const id = localStorage.getItem("userId")
    const dispatch = useDispatch();
    // const {id, token} = useUser();
   

    const [updateProfile, setUpdateUser] = useState(
        {
            username: "",
        },
    )
    const handleChange = (e) => {
        setUpdateUser({
            ...updateProfile, [e.target.id]: e.target.value
        })
    }
    const {loading,error} = useSelector((state) => state.user)

    // send value
    const handleSubmit =(e) => {
        e.preventDefault()
         dispatch(updateUser({updateProfile,token,id}))
         .then(() => {
            toast.success("profile update successfully")
         })
         .catch(() => {
            toast.error("failled to update profile")
         })
    }

    return (
        <section className="max-w-7xl px-[50px] mt-14 bg-gray-100 shadow-xl mb-16 dark:bg-black">
            <div className="container mx-auto mb-8">

                <h6 className="text-2xl text-blue-900 text-center font-bold">Mise à jour profil </h6>
            </div>
            <div className="mt-10">
                <form>
                    <div className="">

                        <div className="input__group flex gap-6 items-center justify-center">
                            <div className="group__item">
                                <label htmlFor="name"
                                       className="text-lg text-red-900 underline">Nom:{profile.username}</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder={profile.username}
                                    className=" block px-4 py-2 border border-gray-950 rounded-md mt-2"
                                />

                            </div>
                            <div className="group__item">
                                <label htmlFor="email"
                                       className="text-lg text-red-900 underline">Nom:{profile.email}</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="name"
                                    placeholder={profile.email}
                                    disabled={profile.email}
                                    className=" block px-4 py-2 border border-gray-950 rounded-md mt-2"
                                />

                            </div>

                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit" className="btn bg-blue-950 text-center text-white "> Envoyer</button>
                </form>
            </div>
        </section>
    )
}
export default Settings