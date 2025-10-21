import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist, onDelete }) {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlist={onEnlist}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BotCollection;
