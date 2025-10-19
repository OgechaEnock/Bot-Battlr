import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then(setBots)
      .catch((err) => console.error("❌ Fetch error:", err));
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
      .catch((err) => console.error("❌ Error deleting bot:", err));
  }

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy bots={army} onRelease={handleReleaseBot} onDelete={handleDelete} />
      <BotCollection bots={bots} onAdd={handleAddBot} />
    </div>
  );
}

export default App;
