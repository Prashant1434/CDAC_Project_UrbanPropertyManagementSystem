import React from "react";
import BuildingImage1 from "../../Assets/building1.jpg"; 
import BuildingImage2 from "../../Assets/image2.jpg"; 
import BuildingImage3 from "../../Assets/building1.jpg"; 
import "./homepage.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
    <Navbar />
      <div className="content">
        <div className="building-section">
          <div className="building-info">
            <h2>Building 1</h2>
            <p>Information about Building 1...</p>
          </div>
          <img src={BuildingImage1} alt="Building 1" className="building-image" />
        </div>
        <div className="building-section">
          <img src={BuildingImage2} alt="Building 2" className="building-image" />
          <div className="building-info">
            <h2>Building 2</h2>
            <p>Information about Building 2...</p>
          </div>
        </div>
        <div className="building-section">
          <div className="building-info">
            <h2>Building 3</h2>
            <p>Information about Building 3...</p>
          </div>
          <img src={BuildingImage3} alt="Building 3" className="building-image" />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
