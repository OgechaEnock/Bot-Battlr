import React from "react";
import "./BotCard.css";

function BotCard({ bot, onClick, onDelete, showDelete }) {
  return (
    <div
      className="card h-100 bot-card shadow-sm border-0"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={bot.avatar_url}
        className="card-img-top"
        alt={bot.name}
        style={{ borderRadius: "12px 12px 0 0" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold text-dark">{bot.name}</h5>
        <p className="card-text text-muted">{bot.bot_class}</p>
        <div className="d-flex justify-content-center gap-3 mb-2">
          <span>⚔️ {bot.damage}</span>
          <span>🛡️ {bot.armor}</span>
          <span>❤️ {bot.health}</span>
        </div>
        {showDelete && (
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            ❌ Discharge
          </button>
        )}
      </div>
    </div>
  );
}

export default BotCard;
