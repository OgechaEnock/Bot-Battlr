import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRelease, onDelete }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDelete={() => onDelete(bot)}
            showDelete
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
