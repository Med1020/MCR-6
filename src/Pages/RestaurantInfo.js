import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CusineContext } from "../Context/CusineProvider";
import "./restaurantInfo.css";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();
  const { restaurants } = useContext(CusineContext);
  const navigate = useNavigate();

  const restaurantDetails = restaurants.filter(
    (restaurant) => restaurant.id === Number(restaurantId)
  );

  const [{ name, id, address, phone, menu, averageRating, ratings }] =
    restaurantDetails;
  return (
    <div className="restaurant-info" key={id}>
      <div className="rest-info-header">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />{" "}
          </svg>
        </button>
        <header>
          <h1>{name}</h1>
          <p>{address}</p>
          <p>Contact: {phone}</p>
          <p>Average Rating:{averageRating}</p>
        </header>
        <button>Add Review </button>
      </div>
      <div className="menu">
        {menu.map(({ name, imgSrc, price }) => (
          <div className="menu-item">
            <img src={imgSrc} height="100px" width="100px" alt={name} />
            <p>{name}</p>
            <p>Rs. {price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        {ratings.map(({ rating, comment, revName, pp }) => (
          <div className="per-review">
            <div className="top">
              <img
                src={pp}
                alt={revName}
                height="50px"
                width="50px"
                className="pp"
              />
              <p>{revName}</p>

              <button>
                {rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />{" "}
                </svg>
              </button>
            </div>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantInfo;
