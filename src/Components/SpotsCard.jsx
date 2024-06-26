import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const SpotsCard = ({spot}) => {
const { 
     tourists_spot_name,
    avg_cost,
    seasonality,
    travel_time,
    visitors_per_year,
    photo,_id}= spot;

    const handleProperty = () => {
      window.scrollTo(0, 0);
    }

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl  transition  hover:scale-105">
        <figure className="px-10 pt-10 ">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl h-48 w-full "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-merriweather">{tourists_spot_name}</h2>
          <div className="h-32">
          <li className="font-semibold text-lg">Average Cost: <span className="font-normal text-lg">{avg_cost} Taka</span> </li>
          <li className="font-semibold text-lg">Visitors: <span className="font-normal text-lg">{visitors_per_year} /year</span></li>
          <li className="font-semibold text-lg">Travel time: <span className="font-normal text-lg">{travel_time}</span></li>
          <li className="font-semibold text-lg">Seasonality: <span className="font-normal text-lg">{seasonality}</span></li>
          </div>
          <div className="card-actions justify-end mt-4">
          <Link onClick={handleProperty} to={`/spotdetails/${_id}`} className="btn text-white bg-[#54A15D]">View Details</Link >
          </div>
        </div>
      </div>
    </div>
  );
};

SpotsCard.propTypes = {
  spot: PropTypes.object,
}
export default SpotsCard;
