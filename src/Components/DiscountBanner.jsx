import { Link } from "react-router-dom";

const DiscountBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qWmczvf/banner-new.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 font-merriweather text-5xl text-white font-bold">Get 20% OFF Your First Trip</h1>
            <p className="mb-5 text-lg font-medium text-white">
            Register now to explore the Middle East! Get 20% off your first trip and start your adventure today
            </p>
            <Link to={"/register"}>
              <a className="btn text-white bg-[#54A15D] text-base border-none px-10">Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
