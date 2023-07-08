import React from "react";
import "./menucard.css";

const MenuCard = ({ menu }) => {
  const { name, imgSrc, price, qty } = menu;
  return (
    <div className="menu-card">
      <img src={imgSrc} height="200px" width="250px" alt={name} />
      <h5>{name}</h5>
      <p>
        Rs.{price} for {qty}
      </p>
    </div>
  );
};

export default MenuCard;
