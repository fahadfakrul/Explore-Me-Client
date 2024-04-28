import { useLoaderData } from "react-router-dom";
import SpotsCard from "../Components/SpotsCard";
import { IoChevronDown } from "react-icons/io5";

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  return (
    <div>
      <h2>data found: {spots.length}</h2>
      <div className="text-right mr-8 md:mr-14 mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#54A15D] text-white px-5 text-lg font-semibold">
            Sort By <IoChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 items-center">
            <li>a</li>
            <li>s</li>
            <li>d</li>
            <li>f</li>
            <li>s</li>
            {/* <li onClick={() => handleBooksFilter("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBooksFilter("Number of pages")}>
              <a >Number of pages</a>
            </li>
            <li onClick={() => handleBooksFilter("Publishing year") }>
              <a>Publishing year</a> 
            </li> */}
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-10">
        {spots.map((spot) => (
          <SpotsCard key={spot._id} spot={spot}></SpotsCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
