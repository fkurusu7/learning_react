import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import PizzasApp from "./apps/pizza/PizzasApp";
import MainApp from "./apps/MainApp";
import StepsApp from "./apps/steps/StepsApp";
import TravelApp from "./apps/travel/TravelApp";
import AccordionApp from "./apps/accordion/AccordionApp";
import CalcApp from "./apps/calculator/CalcApp";
import UsePopcornApp from "./apps/usepopcorn/UsePopcornApp";
import StartRating from "./apps/usepopcorn/StarRating";
import HowReactWorks from "./apps/howreactworks/HowReactWorks";
import GlobalStyles from "./ui/GlobalStyles";
import ReactQuiz from "./apps/reactquiz/ReactQuiz";
import WorldWiseApp from "./apps/worldwise/WorldWiseApp";
import Homepage from "./apps/worldwise/pages/Homepage";
import Product from "./apps/worldwise/pages/Product";
import Pricing from "./apps/worldwise/pages/Pricing";
import PageNotFound from "./apps/worldwise/pages/PageNotFound";
import WWPageLayout from "./apps/worldwise/pages/WWPageLayout";
import Login from "./apps/worldwise/pages/Login";
import CityList from "./apps/worldwise/components/CityList";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainApp />} />
        </Route>
        {/* TODO create main Route for the apps with a back button */}
        <Route path="/pizzas" element={<PizzasApp />} />
        <Route path="/steps" element={<StepsApp />} />
        <Route path="/travel" element={<TravelApp />} />
        <Route path="/accordion" element={<AccordionApp />} />
        <Route path="/calctip" element={<CalcApp />} />
        <Route path="/usepopcorn" element={<UsePopcornApp />} />
        <Route path="/starrating" element={<StartRating />} />
        <Route path="/hrw" element={<HowReactWorks />} />
        <Route path="/reactquiz" element={<ReactQuiz />} />
        <Route path="/worldwise" element={<WorldWiseApp />}>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<WWPageLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="countries" element={<p>Route countries</p>} />
            <Route path="form" element={<p>Route form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
