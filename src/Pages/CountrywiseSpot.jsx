import { useLoaderData, useParams } from "react-router-dom";
import TouristSpot from "../Components/TouristSpot";
import { Slide } from "react-awesome-reveal";

const CountrywiseSpot = () => {
  const spots = useLoaderData();
  const { country_name} = useParams();
  
  const filteredSpots = spots.filter(
    (spot) => spot.country_name === country_name
  );
  return <div>
    
    <div className="flex justify-center"><h1 className="mt-20 text-3xl font-bold md:max-w-3xl leading-none text-center sm:text-5xl">
      <Slide triggerOnce>
  <p>Explore the best tourist attraction in  {country_name}</p>
</Slide>
    </h1></div>
   
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-10 ">
             {
                filteredSpots.map(spots =>(
                   <TouristSpot key={spots._id} spots={spots}></TouristSpot>
                ))
             }
          </div>
  </div>;
};

export default CountrywiseSpot;
