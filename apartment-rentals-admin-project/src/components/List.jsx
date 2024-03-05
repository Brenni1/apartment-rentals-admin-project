// import { useState } from "react";
import rentalData from "../assets/rentals.json";

const List = () => {
  return (
    <div className="totalInfo">
      {rentalData.map((eachObject) => (
        <div className="card" key={eachObject.id}>
          <div className="cardContent">
            <img src={eachObject.picture_url.url} width="300px" />
            <p>
              {eachObject.city}, {eachObject.country}
            </p>
            <p>{eachObject.neighbourhood != null ? eachObject.neighbourhood : ""}</p>
            <p>{eachObject.property_type}</p>
            <p>{eachObject.price} € per Night</p>
            <p>{eachObject.cleaning_fee} € per Stay</p>
            <p>Rating: {eachObject.review_scores_rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
