import React from "react";

function DisplayCounter(props) {
  console.log("DisplayCounter rendered");
  return (
    <div>
      <h2>Counter:{props.counter}</h2>
    </div>
  );
}

export default React.memo(DisplayCounter);
