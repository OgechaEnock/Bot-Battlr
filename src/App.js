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
  function handleAddBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Release bot
  function handleReleaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Delete permanently
  function handleDelete(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  }

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
         <h1 className="display-5 fw-bold text-primary">🤖 Bot Battlr</h1>
          <p className="text-secondary"></p>
          Recruit, manage, and battle-test your intergalactic army.
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <YourBotArmy
          bots={army}
            onRelease={handleReleaseBot}
            onDelete={handleDelete}
                      />
        </div>

       <div className="col-md-12">
          <BotCollection bots={bots} onAdd={handleAddBot} />
        </div>
        </div>
    </div>
  );
}

export default App;
