import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import RestaurantInfo from "./Pages/RestaurantInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:restaurantId" element={<RestaurantInfo />} />
      </Routes>
    </div>
  );
}

export default App;
