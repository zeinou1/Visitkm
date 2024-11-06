import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mb-9 md:px-11 mx-auto max-w-7xl px-2">
      <div className="footer__wrapper">
        <div
          className="footer__content  gap-10 


           lg:flex lg:justify-between 

        "
        >
          <div className=" lg:flex lg:flex-col lg:items-center  lg:gap-6">
            <div className=" flex items-center gap-1 ">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="bxs-plane-alt 1">
                    <g id="Group">
                      <g id="Vector">
                        <path
                          d="M3.414 13.7779C2.5 13.9999 2 15.1919 2 15.1919C2 15.1919 5.398 15.6259 6.949 17.3129C8.5 18.9999 9.071 22.2629 9.071 22.2629C9.071 22.2629 10.47 22.6979 10.485 20.8489C10.5 18.9999 9.778 17.3129 9.778 17.3129L13.091 13.9999L16.701 21.7039C16.701 21.7039 18.08 22.2299 18.04 20.3649C18 18.4999 16.85 10.2419 16.85 10.2419L19.678 7.41294C19.869 7.22845 20.0214 7.00776 20.1262 6.76375C20.231 6.51974 20.2862 6.2573 20.2885 5.99174C20.2908 5.72619 20.2402 5.46283 20.1396 5.21703C20.0391 4.97124 19.8906 4.74794 19.7028 4.56015C19.515 4.37237 19.2917 4.22386 19.0459 4.1233C18.8001 4.02274 18.5368 3.97213 18.2712 3.97444C18.0056 3.97675 17.7432 4.03192 17.4992 4.13674C17.2552 4.24156 17.0345 4.39392 16.85 4.58494L13.947 7.48794C13.947 7.48794 6.148 6.09394 3.824 6.29694C1.5 6.49994 2.559 7.56294 2.559 7.56294L10.203 11.2329L6.95 14.4859C6.95 14.4859 4.328 13.5559 3.414 13.7779Z"
                          fill="#2F80ED"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="tex-[16px] text-[#000] dark:text-white  font-[500] tracking-[0.32px] ">
                {" "}
                VisitKM
              </span>
            </div>
            {/* social network */}
            <div className="social__network md:self-start">
              <div className="social__links flex items-center gap-2  lg:flex lg:flex-col">
                <span className="">
                  <Link to="#">
                    <i className="ri-youtube-line text-red-700"></i>
                  </Link>
                </span>

                <span>
                  <Link>
                    <i className="ri-facebook-line text-blue-600"></i>
                  </Link>
                </span>
                <span>
                  <Link>
                    <i className="ri-instagram-line text-red-900"></i>
                  </Link>
                </span>
                <span>
                  <Link>
                    <i className="ri-instagram-line text-red-900"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <hr className="w-6 h-1 bg-black sm:hidden" />
          <div>
            <h6 className="tex-[16px] mt-2 text-[#000] dark:text-white font-[500] tracking-[0.32px] ">
              Explore
            </h6>
            <ul
              className="mt-4  gap-4 md:flex
                md:flex-col "
            >
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                About
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white  font-[200] tracking-[0.32px] ">
                Jobs
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white  font-[200] tracking-[0.32px] ">
                Newsroom
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white  font-[200] tracking-[0.32px] ">
                Advancing
              </li>
              <li className="tex-[10px] text-[#000]  dark:text-white font-[200] tracking-[0.32px] ">
                Contact KM
              </li>
            </ul>
          </div>
          <hr className="w-6 h-1 bg-black sm:hidden" />

          <div>
            <h6 className="tex-[16px] text-[#000] dark:text-white font-[500] tracking-[0.32px] ">Aide</h6>
            <ul
              className="mt-4  gap-4 md:flex
                md:flex-col "
            >
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                About
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Jobs
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Newsroom
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Advancing
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Contact KM
              </li>
            </ul>
          </div>
          <hr className="w-6 h-1 bg-black sm:hidden" />

          <div>
            <h6 className="tex-[16px] text-[#000] font-[500] tracking-[0.32px] ">
              Contact
            </h6>
            <ul
              className="mt-4  gap-4 md:flex
                md:flex-col "
            >
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                About
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Jobs
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Newsroom
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Advancing
              </li>
              <li className="tex-[10px] text-[#000] dark:text-white font-[200] tracking-[0.32px] ">
                Contact KM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
