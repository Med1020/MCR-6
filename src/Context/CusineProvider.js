import React, { createContext, useState } from "react";
import { restaurantsData } from "../data";

export const CusineContext = createContext();

const CusineProvider = ({ children }) => {
  const [cusine, setCusine] = useState("all");
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const changeCusine = (selectedCusineId) => {
    cusine === "all"
      ? setRestaurants(restaurantsData)
      : setRestaurants(
          restaurantsData.filter(
            ({ cuisine_id }) => cuisine_id === selectedCusineId
          )
        );
  };
  return (
    <CusineContext.Provider
      value={{ cusine, setCusine, restaurants, changeCusine }}
    >
      {children}
    </CusineContext.Provider>
  );
};

export default CusineProvider;
