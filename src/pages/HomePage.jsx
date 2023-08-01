import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [countries, setCountries] = useState(null);

  async function logCountries() {
    try {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const data = await response.json();
      console.log(countries);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    logCountries();
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <p>
        {countries.map((countrie) => {
          return <span>{countrie.name.official}</span>;
        })}
      </p>
    </div>
  );
}

export default HomePage;
