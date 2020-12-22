import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import img14 from "./img/14.jpg";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Card
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="meshack"
          title="Online Experience"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          src="https://images.unsplash.com/photo-1509764986935-841accffc894?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="meshack"
          title="Unique stays"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          src="https://images.unsplash.com/photo-1506812925688-822b4a73db22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="meshack"
          title="Entire Home"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>

      <div className="home_section">
        <Card
          src="https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="meshack"
          title="Beedroom Flat in Bournmouth "
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price="$505.00"
        />
        <Card
          src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="meshack"
          title="Penthouse in London"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price="$300.00"
        />
        <Card
          src="https://images.unsplash.com/photo-1567016507665-356928ac6679?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="meshack"
          title="Bedroom apartment"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price="$600.00"
        />
      </div>
    </div>
  );
}

export default Home;
