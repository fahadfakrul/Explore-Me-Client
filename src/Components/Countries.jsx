import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://tourism-assignment-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-5xl font-bold font-merriweather">Countries</h2>
            <p className=" text-xl dark:text-gray-600">
              Explore different countries in the Middle East.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
           {
            countries.map(country => (<CountryCard key={country._id} country={country}></CountryCard>))
           }
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;
