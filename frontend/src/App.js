import React from "react";
import { Header, Clients } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Clients />
    </div>
  );
};

export default App;
