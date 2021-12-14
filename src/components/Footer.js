import React from "react";

function Footer() {
  console.log("Footer rendered");
  const fStyle = {
    border: "1px solid black",
    width: "100%",
    textAlign: "center",
  };
  return (
    <div>
      <h4 style={fStyle}>Footer Section</h4>
    </div>
  );
}

export default React.memo(Footer);
