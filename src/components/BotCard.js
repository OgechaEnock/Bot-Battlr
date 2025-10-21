import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BotCard.css";

function BotCard({ bot, onEnlist, onRelease, onDelete, isArmy }) {
  return (
    <div className="card bot-card text-center shadow-lg bg-dark text-light border-warning position-relative">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="card-img-top bot-img"
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-warning">{bot.name}</h5>
        <p className="card-text small text-secondary">
          <strong>Class:</strong> {bot.bot_class}
          <br />
          <strong>Health:</strong> {bot.health}
          <br />
          <strong>Damage:</strong> {bot.damage}
          <br />
          <strong>Armor:</strong> {bot.armor}
        </p>

        {!isArmy ? (
          <button
            className="btn btn-outline-warning btn-sm w-100"
            onClick={() => onEnlist(bot)}
          >
            Enlist Bot
          </button>
        ) : (
          <button
            className="btn btn-outline-success btn-sm w-100"
            onClick={() => onRelease(bot.id)}
          >
            Release Bot
          </button>
        )}
      </div>

      {/* Delete Button (X) */}
      <button
        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => onDelete(bot.id)}
      >
        ✖
      </button>
    </div>
  );
}

export default BotCard;
