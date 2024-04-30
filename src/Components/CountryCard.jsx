import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { country_name, image, description } = country;
  return (
    <Link to={}>
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
        <Link to={} className="flex flex-col flex-1 p-6">
          <h3 className="font-merriweather flex-1 text-center py-2 text-lg font-semibold leading-snug">
            {country_name}
          </h3>
          <p className="text-lg text-center">{description}</p>
        </div>
      </article>
    </div>
  );
};

export default CountryCard;
