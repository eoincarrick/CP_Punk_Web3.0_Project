import React from "react";
import weth from "../assets/weth.png";
import "../components/style/CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="CollectionCard">
      <img src={image} alt="punk" />
      <div className="details">
        <div className="name">
          {name} <div className="id"> •́#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="weth" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
