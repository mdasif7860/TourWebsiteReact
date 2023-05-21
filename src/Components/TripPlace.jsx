import React from "react";
import "./Trips.css";

const TripPlace = (props) => {
  return (
    <div className="trip-places">
      <div className="trip-image">
        <img src={props.tripImg} alt="" />
      </div>
      <div className="trip-content">
        <h3>{props.tripHeading}</h3>
        <p>{props.tripText}</p>
      </div>
    </div>
  );
};

export default TripPlace;
