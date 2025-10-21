import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BotSpecs({ bot, onBack, onEnlist, onDelete }) {
  return (
    <div className="card bg-dark text-light border-warning shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="card-img-top"
        style={{ height: "300px", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
      />
      <div className="card-body text-center">
        <h3 className="fw-bold text-warning mb-3">{bot.name}</h3>
        <p className="mb-1"><strong>Class:</strong> {bot.bot_class}</p>
        <p className="mb-1"><strong>Health:</strong> {bot.health}</p>
        <p className="mb-1"><strong>Damage:</strong> {bot.damage}</p>
        <p className="mb-3"><strong>Armor:</strong> {bot.armor}</p>
        <blockquote className="fst-italic text-secondary">“{bot.catchphrase}”</blockquote>

        <div className="d-flex justify-content-around mt-4">
          <button className="btn btn-outline-light" onClick={onBack}>
            ← Go Back
          </button>
          <button className="btn btn-outline-warning" onClick={() => onEnlist(bot)}>
            Enlist
          </button>
          <button className="btn btn-outline-danger" onClick={() => onDelete(bot.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
