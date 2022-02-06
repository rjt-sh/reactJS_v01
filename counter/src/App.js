import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./components/Cstyle.css";

// Core Component
const App = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};

export default App;
