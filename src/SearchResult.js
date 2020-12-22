import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
function SearchResult({
  img,
  location,
  title,
  discription,
  star,
  price,
  total,
}) {
  return (
    <div className="searchresult">
      <img className="searchresult_img" src={img} alt="airBnb" />
      <FavoriteBorderIcon className="searchResult_heart" />

      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p className="searchResult_infoTopPara">{location}</p>
          <h3 className="searchResult_infoTopheadin3">{title}</h3>
          <p className="searchResult_infoTopPara">____</p>
          <p className="searchResult_infoTopPara">{discription}</p>
        </div>
        <div className="searchResult_infoBottom">
          <div className="SearchResult_stars">
            <StarIcon className="searchResult_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult_Price">
            <h2>{price}</h2>
            <h2>{total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
