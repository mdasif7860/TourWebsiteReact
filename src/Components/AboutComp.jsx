import React from "react";
import "./AboutComp.css";
import AboutCompData from "./AboutCompData";

const AboutComp = () => {
  return (
    <div className="aboutComp">
      <AboutCompData Heading="Our History" Text=" Trippy is owned and managed by Trippy. In Pvt Ltd. a leading brand in
        web designing services and e-commerce solutions. Trippy . in Pvt. Ltd.
        is counted for it's expertise in web solutions and it's top ranking
        business portals. Our invincible expertise and rich experience has
        raised our spirit to reach ahead from our client expection. Commendable
        success rate of other portals managed by Trippy is a live paradigm of
        our work excellence."/>
      <AboutCompData Heading="Our Mission" Text="Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness"/>
      <AboutCompData Heading="Our Vision" Text="To sow the seeds of par-excellence sevices with customer centric approach the reap the trust of worlwide clients."/>
    </div>
  );
};

export default AboutComp;
