import React, { useState } from 'react';

const ButtonComponent = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? "#0068c9" : "#004f97",
    borderRadius: "50%",
    width: hovered ? "42px" : "40px", 
    height: hovered ? "42px" : "40px", 
    bottom: "20px",
    right: "5%",
    position: "fixed",
    zIndex: 1,
    border: "none",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <button
      onClick={onClick}
      className="chatbot-button"
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src="ai-chatbot.png" alt="" srcSet=""  style={{ width: "80%", height: "80%" }} />
    </button>
  );
};

export default ButtonComponent;