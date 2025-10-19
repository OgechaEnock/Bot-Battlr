import React from "react";

function BotCard({ bot, onClick, onDelete, showDelete }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>⚔️ {bot.damage} | 🛡️ {bot.armor} | ❤️ {bot.health}</p>
      {showDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="delete-btn"
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default BotCard;
