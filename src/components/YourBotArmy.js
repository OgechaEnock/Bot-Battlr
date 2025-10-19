import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRelease, onDelete }) {
  return (
    <div className="bg-primary bg-opacity-10 p-3 rounded shadow-sm">
      <h4 className="text-center text-primary mb-3">Your Bot Army</h4>
      {bots.length === 0 && (
        <p className="text-center text-muted">No bots enlisted yet ⚙️</p>
      )}
      <div className="row g-3">
        {bots.map((bot) => (
          <div key={bot.id} className="col-sm-6 col-md-4 col-lg-3">
            <BotCard
              bot={bot}
              onClick={() => onRelease(bot)}
              onDelete={() => onDelete(bot)}
              showDelete
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
