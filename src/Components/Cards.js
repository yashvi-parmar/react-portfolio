import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="port.jpg.png"
              text="Portfolio Website"
              label="React.js"
            />
            <CardItem
              src="ttd.png"
              text="Task Manager Application"
              label="HTML, CSS, JavaScript"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Personal Management Tool"
              label="Excel (VBA, Macros)"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Decision Support Tool"
              label="Excel (VBA, Pivot Tables, Lookups)"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
