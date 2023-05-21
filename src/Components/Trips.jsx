import React from "react";
import "./Trips.css";
import TripPlace from "./TripPlace";
import TripData from "./TripData";

const Trips = () => {
  return (
    <div className="trip-section">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trips">
        {TripData.map((value) => {
          return (
            <TripPlace
              tripImg={value.tripImg}
              tripHeading={value.tripHeading}
              tripText={value.tripText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trips;
