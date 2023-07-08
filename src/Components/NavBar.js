import React, { useContext } from "react";
import { cuisineData } from "../data";
import "./navbar.css";
import { CusineContext } from "../Context/CusineProvider";

const NavBar = () => {
  const { setCusine, changeCusine } = useContext(CusineContext);
  return (
    <div className="navbar">
      <h3>Select your Cusine:</h3>
      <div className="cusine-navbar">
        {cuisineData.map(({ name, id }) => (
          <button
            key={id}
            className="cusine-btn"
            value={name}
            onClick={(e) => {
              setCusine(e.target.value);
              changeCusine(id);
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
