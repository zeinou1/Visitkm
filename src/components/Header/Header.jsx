import {useRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../Features/UsersSlice/LoginSlice.jsx";
import {initialProfile} from "../Features/UsersSlice/ProfileSlice.jsx";
import logo from "../../assets/images/img/logo.svg";
import avatar from "../../assets/images/img/avatar.png";
import {NavLink, Link, useNavigate} from "react-router-dom";
import {CiMenuFries} from "react-icons/ci";
import {IoIosNotifications} from "react-icons/io";
//! Import
import "./header.css";

const NavLinks = [
    {
        path: "/home",
        Display: "Home",
    },
    {
        path: "/hotels",
        Display: "Hotels",
    },
    {
        path: "#",
        Display: "Apropos",
    },
    {
        path: "#",
        Display: "Activites",
    },
    {
        path: "#",
        Display: "Contact",
    },
];

function Header() {
    const navigate = useNavigate();
    // sticky header
    const btnRef = useRef(null);
    const headerRef = useRef(null);
    const navRef = useRef(null);
    //  function stickyHeader
    const stickyHeader = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                if (headerRef.current) {
                    headerRef.current.classList.add("menu__sticky");
                }
            } else {
                headerRef.current.classList.remove("menu__sticky");
            }
        });
    };
    useEffect(() => {
        stickyHeader();
        return window.removeEventListener("scroll", stickyHeader);
    }, []);

    //darkmode
    const [dark, setDark] = useState(false);
    const darkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDark(!dark);
    };
    //  mobile displayMenu
    const handleDisplayMenu = () => {
        navRef.current.classList.toggle("show__menu");
        // console.log("click");
    };
    //! display infos user from Database

    //todo:  méthode  redux

    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    const {isAuthenticated} = useSelector((state) => state.user);

    console.log(isAuthenticated);
    // dispatch(userProfile({ id: userId, token: userToken }));
    const handleLogout = () => {
        dispatch(logout());
        dispatch(initialProfile());
        navigate("/");
    };
    const id = localStorage.getItem('userId');
    return (
        <header className="w-full px-[50px] mb-7 mx-auto  " ref={headerRef}>
            <div className="w-full mx-auto ">
                <nav className="nav__wrapper flex justify-between items-center mx-auto pt-4  ">
                    {/* ============ Logo =========== */}
                    <div className=" flex items-center justify-center gap-1 ">
            <span>
              <img src={logo} alt="logo" className="logo cursor-pointer"/>
            </span>
                        <span>
              <Link to="/home">VisitKM</Link>
            </span>
                    </div>
                    {/* ============ End Logo ===========  */}

                    {/* ======= Menu ========*/}
                    <div
                        className="navigation lg:block pt-2 relative"
                        ref={navRef}
                        onClick={handleDisplayMenu}
                    >
                        <ul className="menuu flex items-center justify-center  gap-[48px] ">
                            {NavLinks.map((nav, index) => (
                                <li key={index} className="nav__item">
                                    <NavLink
                                        to={nav.path}
                                        className={(navClass) => (navClass.isActive ? "link__active" : "")}
                                    >
                                        {" "}
                                        {nav.Display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className='absolute lg:hidden bottom-4 transform translate-x-1/2 -translate-y-1/2 right-1/2'>
                            <button
                                className="px-4 py-2 text-center rounded-md text-white  bg-slate-700 lg:block mr-3 ">
                                <Link to="/login">Login</Link>
                            </button>

                            <button
                                className="px-4 py-2 text-center bg-blue-700  lg:block rounded-md "
                                data-theme="Dark"
                            >
                                <Link to="/register" className="text-white ">
                                    Register
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* ========== End Menu ======== */}

                    {/* Nav right avatar */}
                    <div className="nav__right ">
                        <div className="nav__btn flex items-center justify-between ">
                            <div className="flex items-center  gap-1">
                <span>
                  <IoIosNotifications className="w-6 h-6"/>
                </span>

                                <button className=" cursor-pointer mr-2" onClick={darkMode}>
                                    {dark === false ? "🌙" : "☀️"}
                                </button>
                            </div>

                            <img src={avatar} alt="avatar" className="hidden"/>

                            {isAuthenticated ? (
                                <div className="navbar bg-base-100">
                                    <div className="flex-none gap-2">

                                        <div className="dropdown dropdown-end">
                                            <div
                                                tabIndex={0}
                                                role="button"
                                                className="btn btn-ghost btn-circle avatar"
                                            >
                                                <h5 className="font-bold text-gray-900 text-lg dark:text-slate-50">
                                                    {profile.username}
                                                </h5>
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-gray-900 rounded-md z-[1] mt-3 w-52 p-2 shadow"
                                            >
                                                <li>
                                                    <Link to={`/users/${id}`} className="justify-between text-gray-50">
                                                        Profile

                                                    </Link>
                                                </li>
                                                <li>
                                                    <a className="text-gray-50">Settings</a>
                                                </li>
                                                <li>
                                                    <a
                                                        onClick={handleLogout}
                                                        className="text-gray-50">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <button
                                        className="px-4 py-2 text-center rounded-md hidden text-white  bg-slate-700 lg:block mr-3 ">
                                        <Link to="/login">Login</Link>
                                    </button>

                                    <button
                                        className="px-4 py-2 text-center bg-blue-700 hidden lg:block rounded-md "
                                        data-theme="Dark"
                                    >
                                        <Link to="/register" className="text-white ">
                                            Register
                                        </Link>
                                    </button>
                                </>
                            )}

                            <span onClick={handleDisplayMenu}>
                <CiMenuFries className="w-6 h-6 lg:hidden"/>
              </span>
                        </div>

                    </div>
                    {/*End  Nav right */}
                </nav>
            </div>
        </header>
    );
}

export default Header;
