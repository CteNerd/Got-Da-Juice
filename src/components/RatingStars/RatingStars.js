import React from "react";
import "./RatingStars.css";

const RatingStars = ({ rating }) => {
  return (
    <div className="rating-stars">
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
    </div>
  );
};

export default RatingStars;
