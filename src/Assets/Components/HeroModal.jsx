import React from "react";

function HeroModal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div className="heroModal__overlay">
      <div className="heroModal__div">
        <button className="heroModal__btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default HeroModal;
