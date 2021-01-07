import React from "react";

const Footer = () => {
  return (
    <p
      className="text-center"
      style={{
        padding: "10px",
        width: "100vw",
        backgroundColor: "#fff",
        height: "50px",
        zIndex: 9999,
        position: "fixed",
        bottom: -20,
      }}
    >
      NitzozMalka By Ravid Cohen © {new Date().getFullYear()}
    </p>
  );
};

export default Footer;
