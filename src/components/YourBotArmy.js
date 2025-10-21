import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDelete }) {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {army.length > 0 ? (
        army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRelease={onRelease}
            onDelete={onDelete}
            isArmy
          />
        ))
      ) : (
        <p className="text-center text-light fst-italic">
          No bots enlisted yet. Click on a bot to add it!
        </p>
      )}
    </div>
  );
}

export default YourBotArmy;
