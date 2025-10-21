import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

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
    <div className="container-fluid p-4 bg-dark text-light min-vh-100">
      <h1 className="text-center mb-4 fw-bold text-warning">⚔️ Bot Battlr ⚙️</h1>

      <div className="row g-4">
        {/* Left Column - All Bots */}
        <div className="col-md-8">
          <div className="card bg-secondary shadow-lg border-0">
            <div className="card-header text-center bg-warning text-dark fw-bold">
              Available Bots
            </div>
            <div className="card-body">
              <BotCollection
                bots={bots}
                onEnlist={handleEnlist}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>

        {/* Right Column - My Army */}
        <div className="col-md-4">
          <div className="card bg-secondary shadow-lg border-0">
            <div className="card-header text-center bg-success text-white fw-bold">
              Your Bot Army
            </div>
            <div className="card-body">
              <YourBotArmy
                army={army}
                onRelease={handleRelease}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;