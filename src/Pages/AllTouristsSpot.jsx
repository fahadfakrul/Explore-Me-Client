import { useLoaderData } from "react-router-dom";
import SpotsCard from "../Components/SpotsCard";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";

const AllTouristsSpot = () => {
  const spots = useLoaderData();

  const [sortedSpots, setSortedSpots] = useState(spots);

  const handleSpotsFilter = (filter) => {
    let sortedTouristSpots = [...sortedSpots];

    switch (filter) {
      case "Ascending":
        sortedTouristSpots.sort((a, b) => a.avg_cost - b.avg_cost);
        break;
      case "Descending":
        sortedTouristSpots.sort((a, b) => b.avg_cost - a.avg_cost);
        break;
      default:
    }
    setSortedSpots(sortedTouristSpots);
  };
  return (
    <div>
      <div className="text-right mr-8 md:mr-14 mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#54A15D] text-white px-5 text-lg font-semibold">
            Sort By <IoChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 items-center">
            <li onClick={() => handleSpotsFilter("Ascending")}>
              {" "}
              <a>Ascending</a>{" "}
            </li>
            <li onClick={() => handleSpotsFilter("Descending")}>
              {" "}
              <a>Descending</a>{" "}
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-10">
        {sortedSpots.map((spot) => (
          <SpotsCard key={spot._id} spot={spot}></SpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
