import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import RestaurantCard from "../Components/RestaurantCard";
import { CusineContext } from "../Context/CusineProvider";

const LandingPage = () => {
  const { restaurants } = useContext(CusineContext);

  return (
    <div>
      <h1>Food Ordering App</h1>
      <NavBar />
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurantDetails={restaurant} />
      ))}
    </div>
  );
};

export default LandingPage;
