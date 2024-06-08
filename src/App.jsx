import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import PizzasApp from "./apps/pizza/PizzasApp";
import MainApp from "./apps/MainApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainApp />} />
        </Route>
        <Route path="/pizzas" element={<PizzasApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
