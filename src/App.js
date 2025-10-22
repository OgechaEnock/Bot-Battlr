import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "bootstrap/dist/css/bootstrap.min.css";
import SortBar from "./components/SortBar";
function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // Sort handle
  const handleSort = (type) => {
    setSortBy(type);
  };
  
  const sortedBots = [...bots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });



  // Fetch bots
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Add to army
  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot
  const handleRelease = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  // Delete permanently
  const handleDelete = async (botId) => {
    try {
      const res = await fetch(`http://localhost:8001/bots/${botId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete bot");

      setBots(bots.filter((bot) => bot.id !== botId));
      setArmy(army.filter((bot) => bot.id !== botId));
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };
  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4 fw-bold">🤖 Bot Battlr</h1>

      {/* Sorting Dropdown */}
      <SortBar onSort={handleSort} />

      <div className="row mt-4">
        
        <div className="col-md-8 mb-4">
          <div className="card shadow border-0 p-3 bg-light">
            <h4 className="text-center mb-3 text-dark">Available Bots</h4>
            <BotCollection
              bots={sortedBots}
              onEnlist={handleEnlist}
              onDelete={handleDelete}
            />
          </div>
        </div>

        {/* Right Column - Bot Army */}
        <div className="col-md-4">
          <div className="card shadow border-0 p-3 bg-dark text-white">
            <h4 className="text-center mb-3">My Bot Army </h4>
            <YourBotArmy
              army={army}
              onRelease={handleRelease}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;