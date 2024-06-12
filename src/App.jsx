import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import PizzasApp from "./apps/pizza/PizzasApp";
import MainApp from "./apps/MainApp";
import StepsApp from "./apps/steps/StepsApp";
import TravelApp from "./apps/travel/TravelApp";
import AccordionApp from "./apps/accordion/AccordionApp";
import CalcApp from "./apps/calculator/CalcApp";
import UsePopcornApp from "./apps/usepopcorn/UsePopcornApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainApp />} />
        </Route>
        <Route path="/pizzas" element={<PizzasApp />} />
        <Route path="/steps" element={<StepsApp />} />
        <Route path="/travel" element={<TravelApp />} />
        <Route path="/accordion" element={<AccordionApp />} />
        <Route path="/calctip" element={<CalcApp />} />
        <Route path="/usepopcorn" element={<UsePopcornApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
