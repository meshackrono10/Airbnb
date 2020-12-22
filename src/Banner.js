import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        {/* show dates button */}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          variant="outlined"
          className="search_btn"
        >
          {showSearch ? "hide" : "Search Date"}
        </Button>
        
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a diffrent kind of getaway to uncover the hidden gems near you
        </h5>
        {/* //Explore near by button */}
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
