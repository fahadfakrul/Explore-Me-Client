import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";


const TouristsSpots = () => {
    const [spots,setSpots] = useState([]);

    

    useEffect(() => {
       fetch("https://tourism-assignment-server.vercel.app/spots")
       .then((res) => res.json())
       .then((data) => setSpots(data))
    },[])

    console.log(spots);
    const showSpots = spots.slice(0,6); 
    return (
        <div className="my-12">
            
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Tourists Spots
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-10 ">
             {
                showSpots.map(spots =>(
                   <TouristSpot key={spots._id} spots={spots}></TouristSpot>
                ))
             }
          </div>
        </div>
    );
};

export default TouristsSpots;