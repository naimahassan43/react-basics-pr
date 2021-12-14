import React from "react";

function DisplayFlag(props) {
  console.log("DisplayFlag rendered");
  return (
    <div>
      <h2>Flag: {props.flag.toString()}</h2>
    </div>
  );
}

export default React.memo(DisplayFlag);
