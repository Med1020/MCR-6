import React from "react";
import "./restaurantcard.css";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurantDetails }) => {
  const { id, name, menu } = restaurantDetails;
  return (
    <Link to={`/${id}`}>
      <div className="restaurant-card" key={id}>
        <p className="restaurant-name">Dishes by {name}</p>
        <div className="menu-display">
          {menu.map((menuItem) => (
            <MenuCard menu={menuItem} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
