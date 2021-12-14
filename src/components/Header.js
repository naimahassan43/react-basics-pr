import React from "react";

function Header() {
  console.log("Header rendered");
  const hStyle = {
    border: "1px solid black",
    width: "100%",
    textAlign: "center",
  };
  return (
    <div>
      <h4 style={hStyle}>Header Section</h4>
    </div>
  );
}

export default React.memo(Header);
