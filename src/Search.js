import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
// main style file
import "react-date-range/dist/theme/default.css";
// theme css files
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
//data picker componenet

function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startData: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startData);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2 className="search_text">
        Number of guests
        <PeopleIcon />
      </h2>
      <input className="search_input" min={0} defaultValue={2} type="number" />

      <Button onClick={() => history.push("/search")} className="search_btn">
        Search Airbnb
      </Button>
    </div>
  );
}

export default Search;
