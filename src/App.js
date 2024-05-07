// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import BotDetails from "./components/BotDetails";
import FilterBot from "./components/FilterBot";

function App() {
  // function onFilterBots(filterValue) {
  //   setFilterBots(handleFilterChange);
  // }
  const [bot, setBot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/bots")
      .then((res) => res.json())
      .then((handleFilterChange) => setBot(handleFilterChange));
  }, []);

  const sortedHealth = bot.sort((a, b) => (a.health > b.health ? -1 : 1));

  const sortedList = sortedHealth.map((Details, index) => {
    return (
      <div className="card-body" key={index}>
        <h5 className="card-title">{Details.name}</h5>
        <p className="card-text">
          <small className="text-muted">{Details.health}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{Details.damage}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{Details.armor}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{Details.bot_class}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{Details.catchphrase}</small>
        </p>
      </div>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <FilterBot />

      <Routes>
        <Route path="/" element={<BotCollection />} />
        <Route path="/bots/:id" element={<BotDetails bots={sortedList} />} />
        <Route path="/bots" element={<YourBotArmy />} />
      </Routes>
    </div>
  );
}

export default App;