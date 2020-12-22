import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import image1 from "./img/15.jpg";
import image2 from "./img/13.jpg";
import image3 from "./img/12.jpg";
import image4 from "./img/11.jpg";
import image5 from "./img/16.jpg";
import image6 from "./img/17.jpg";

function SearchPage() {
  return (
    <div className="SeachPage">
      <div className="SeachPage_info">
        <p>62 stay 26 august to 30augast.2guest </p>
        <h1> stay neaby </h1>
        <Button variant="outline">Cancellation Flexibility</Button>
        <Button variant="outline">Type of place</Button>
        <Button variant="outline">Price</Button>
        <Button variant="outline">Rooms and beds</Button>
        <Button variant="outline">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxzb2Zhc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        location="Private Room in London"
        title="Stay at this Spacious Edward House"
        discription="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?"
        star={4.73}
        price="$550/ night"
        total="$1000 total"
      />
      <SearchResult
        // collomn ane

        img="https://images.unsplash.com/photo-1509764716339-c509a0c0d3e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA4fHxzb2Zhc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        location="Private Room in London"
        title="Stay at this Spacious Edward House"
        discription="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?"
        star={4.73}
        price="$550/ night"
        total="$1000 total"
      />
      <SearchResult
        // collomn ane

        img="https://images.unsplash.com/photo-1515094193635-40722cc342b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        location="Private Room in London"
        title="Stay at this Spacious Edward House"
        discription="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?"
        star={4.73}
        price="$550/ night"
        total="$1000 total"
      />

      <SearchResult
        // collomn ane
        img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzB8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        location="Private Room in London"
        title="Stay at this Spacious Edward House"
        discription="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?"
        star={4.73}
        price="$550/ night"
        total="$1000 total"
      />

      <SearchResult
        // collomn ane
        img="https://images.unsplash.com/photo-1503589368086-b7ca53e7126f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        location="Private Room in London"
        title="Stay at this Spacious Edward House"
        discription="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?"
        star={4.73}
        price="$550/ night"
        total="$1000 total"
      />
      <SearchResult
        // collomn ane
        img="https://images.unsplash.com/photo-1528754704377-60e053a66165?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        location="Private Room in London"
        title="Stay at this Spacious Edward House"
        discription="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?"
        star={4.73}
        price="$550/ night"
        total="$1000 total"
      />
    </div>
  );
}

export default SearchPage;
