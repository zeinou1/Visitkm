import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userProfile} from "../Features/UsersSlice/ProfileSlice.jsx";
import {useUser} from "../../utils/config.js"
import ProfileInfos from "./ProfileInfos.jsx";
import Settings from "./Settings.jsx";
import AddHotel from "./AddHotel.jsx";

const Profile = () => {
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profile);
    // const {user.role: role} = useSelector((state) => state.user);
    // const role = user.role
    // console.log("user idididididi",user.role);
    
    const {loading, error} = useSelector((state) => state.user);

    const {id, token} = useUser();
    // console.log("ALL token",id, token);

    useEffect(() => {
        if (id && token) {
            // Appel de userProfile avec id et token
            dispatch(userProfile({id, token}))
                .unwrap()
                .then((data) => {
                })
                .catch((error) => {
                });
        }
    }, [dispatch, id, token]);

    console.log("Profile", profile);

    // Gestion compte
    const [displayUser, setDisplayUser] = useState("profile infos")

    return (
        <section className="lg:container mx-6 md:mx-auto">
            <div>
                <div className="flex gap-10">
                    <button
                        onClick={() => setDisplayUser("profile infos")}
                        className={displayUser === "profile infos" ? "border-b-2 border-b-blue-700 text-2xl text-bold" : "text-2xl text-bold"}>

                        <i className="ri-profile-line"></i>
                    </button>
                    <button onClick={() => setDisplayUser("edit")}
                            className={displayUser === "edit" ? "border-b-2 border-b-red-600 text-2xl text-bold" : "text-2xl text-bold"}
                    >
                        <i className="ri-edit-box-fill"></i>
                    </button>
                    <button
                        onClick={() => setDisplayUser("addUser")}
                        className={displayUser === "addUser" ? "border-b-2 border-b-blue-700 text-2xl text-bold" : "text-2xl text-bold"}

                    >
                        <i className="ri-file-add-line"></i>
                    </button>
                </div>
                {displayUser === "profile infos" && <ProfileInfos loading={loading} profile={profile}/>}

                {displayUser === "edit" && <Settings loading={loading} profile={profile}/>}

                {
                displayUser === "addUser" &&  <AddHotel profile={profile}/> 
                
                }

            </div>
        </section>
    );
};
export default Profile;
