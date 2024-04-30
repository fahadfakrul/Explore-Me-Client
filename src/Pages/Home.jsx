import Banner from "../Components/Banner";
import Countries from "../Components/Countries";
import DiscountBanner from "../Components/DiscountBanner";
import TourGuide from "../Components/TourGuide";
import TouristsSpots from "../Components/TouristsSpots";


const Home = () => {


    return (
        <div>
           <Banner></Banner>
           <TouristsSpots></TouristsSpots>
           <Countries></Countries>
           <DiscountBanner></DiscountBanner>
           <TourGuide></TourGuide>
        </div>
    );
};

export default Home;