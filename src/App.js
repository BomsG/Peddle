import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Plans from "./component/Plans";
import Sponsored from "./component/Sponsored";
import Card from "./component/Card";
import Footer from "./component/Foot";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Plans />
      <Sponsored />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
