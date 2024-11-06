import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section className="banner__foot mb-10 px-[29px] mx-auto max-w-7xl ">
      <div className=" flex flex-col items-center justify-center gap-4 ">
        <div className=" ">
          <div className="newsletter__content bg-blue-300 py-4 px-6 rounded-md">
            <div
              className="newsletter__input  flex flex-col items-center justify-center gap-4
              lg:flex
              lg:flex-row
              lg:items-center
              lg:justify-center
              lg:gap-4
              "
            >
              <input
                type="email"
                name="newsletter"
                id=""
                placeholder="Entrez votre Email"
                className="input bg-black"
              />
              <button className=" btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <h5 className="text-center lg:text-[28px] text-red-400 font-[600] tracking-[140%] mt-4">
            Explore the world with My Dream place
          </h5>
          <button className="text-center">
            <Link to="/hotels" className="dark:text-[#e6eef9] font-[400]">
              Discover new places and experiences
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
