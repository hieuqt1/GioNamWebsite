import React, { useState } from "react";
import "./HistoryPage.css";
import Header from "../../PageSections/Header/Header";
import Footer from "../../PageSections/Footer/Footer";

export default function HistoryPage() {

  return (
    <>
      <Header />
      <div className="flag-container">
        <div className="grid-box-1">
          <FlagStripe default="blue" />
          <FlagStripe default="white" />
          <FlagStripe default="red" />
        </div>
        <div className="grid-box-2">
          <FlagStripe default="blue" />
          <FlagStripe default="white" />
          <FlagStripe default="red" />
        </div>
      </div>
      <Footer />
    </>
  );
}

// function rgb(red, green, blue) {
//     return
// }

function FlagStripe(props) {
  const [color, setColor] = useState(props.default);

  const handleColorChange = () => {
    const rand = Math.floor(Math.random() * 256);
    const rand1 = Math.floor(Math.random() * 256);
    const rand2 = Math.floor(Math.random() * 256);

    const colors = `rgb(${rand}, ${rand1}, ${rand2})`;

    setColor(colors);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      tabIndex="0
      "
      onClick={handleColorChange}
    ></div>
  );
}
