import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd }) {
  return (
    <div className="bg-light p-3 rounded shadow-sm">
       <h4 className="text-center text-dark mb-3">Available Bots</h4>
      <div className="row g-3">
        {bots.map((bot) => (
          <div key={bot.id} className="col-sm-6 col-md-4 col-lg-3">
          <BotCard bot={bot} onClick={() => onAdd(bot)} />
          </div>
        ))}

        </div>
    </div>
  );
}

export default BotCollection;
