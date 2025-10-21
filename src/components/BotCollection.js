import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bots, selectedBot, onSelect, onEnlist, onDelete }) {
  if (selectedBot) {
    return (
      <BotSpecs
        bot={selectedBot}
        onBack={() => onSelect(null)}
        onEnlist={onEnlist}
        onDelete={onDelete}
      />
    );
  }
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default BotCollection;
