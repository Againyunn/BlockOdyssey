import React, { useState, useEffect } from "react";

// style
import "static/style/css/effectButton.css";

const RippleButton = ({ children, onClick, buttonType, isSelected }) => {
  const [coordinate, setCoordinate] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coordinate.x !== -1 && coordinate.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coordinate]);

  useEffect(() => {
    if (!isRippling) setCoordinate({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className={`ripple-button ${!buttonType ? "none-button-shape" : ""} ${
        !isSelected ? "" : "is-selected"
      }`}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoordinate({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coordinate.x,
            top: coordinate.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="button-content">{children}</span>
    </button>
  );
};

export default RippleButton;
