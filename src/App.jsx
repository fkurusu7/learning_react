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

function App() {
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
        <Route path="/worldwise" element={<WorldWiseApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
