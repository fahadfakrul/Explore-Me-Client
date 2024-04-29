import Banner from "../Components/Banner";
import DiscountBanner from "../Components/DiscountBanner";
import TourGuide from "../Components/TourGuide";
import TouristsSpots from "../Components/TouristsSpots";


const Home = () => {


    return (
        <div>
            <Banner></Banner>
           <TouristsSpots></TouristsSpots>
           <DiscountBanner></DiscountBanner>
           <TourGuide></TourGuide>
        </div>
    );
};

export default Home;