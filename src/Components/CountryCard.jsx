import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const CountryCard = ({ country }) => {
  const { country_name, image, description } = country;
  const handleProperty = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Link onClick={handleProperty} to={`/countrywisespot/${country_name}`}>
      <article className="flex flex-col dark:bg-gray-50 card card-body  transition  hover:scale-105">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 rounded-xl dark:bg-gray-500"
            src={image}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-merriweather flex-1 text-center py-2 text-lg font-semibold leading-snug">
            {country_name}
          </h3>
          <p className="text-lg text-center">{description}</p>
        </div>
      </article>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object,
}

export default CountryCard;
