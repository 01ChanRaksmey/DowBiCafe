
import React from "react";
import VisitInfo from "./VisitInfo";
import Contact from "./Contact";
import MapSection from "./MapSection";

const VisitPage = () => {
  return (
    <div>
      {/* Welcome & Visit Information */}
      <div>
        <VisitInfo />
      </div>
      {/* Contact information */}
      <div>
        <Contact />
      </div>
      <div>
        <MapSection />
      </div>
    </div>
  );
};

export default VisitPage;
