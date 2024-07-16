/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setcurrentCity] = useState({});

  const BASE_URL_WW = "http://localhost:8000";
  useEffect(function () {
    async function fetchCities() {
      try {
        // setIsLoading(true);
        const res = await fetch(`${BASE_URL_WW}/cities`);
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchCities();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  async function fetchCity(id) {
    try {
      const result = await fetch(`${BASE_URL_WW}/cities/${id}`);
      const data = await result.json();
      setcurrentCity(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        fetchCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}
export { CitiesProvider, useCities };