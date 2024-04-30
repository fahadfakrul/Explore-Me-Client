import { Link } from "react-router-dom";

import { Typewriter } from 'react-simple-typewriter'
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
          <div className="max-w-lg">
            <h1 className="mb-5 font-merriweather text-5xl text-white font-bold">Get <Typewriter
            words={['20% OFF', '15% OFF', '10% OFF']}
            loop={5}
            cursor
            cursorStyle=''
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
           
          />   </h1>
            <h1 className="mb-5 font-merriweather text-5xl text-white font-bold">  Your First, Second And Third Trip</h1>
            <p className="mb-5 text-lg font-medium text-white">
            Register now to explore the Middle East! Get your offer and start your adventure today
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
