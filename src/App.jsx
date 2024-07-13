import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
import CountryList from "./apps/worldwise/components/CountryList";
import City from "./apps/worldwise/components/City";
import Form from "./apps/worldwise/components/Form";
import { CitiesProvider } from "./apps/worldwise/contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
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
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
