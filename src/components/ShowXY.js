// import React, { useState, useEffect } from "react";

// function ShowXY() {
//   const [strXY, setStrXY] = useState("0,0");
//   const displayXY = (e) => {
//     let str = e.pageX + "," + e.pageY;
//     setStrXY(str);
//     console.log(str);
//   };
//   useEffect(() => {
//     window.addEventListener("mousemove", displayXY);
//     return () => {
//       window.removeEventListener("mousemove", displayXY);
//     };
//   });
//   return (
//     <div>
//       <h1>{strXY}</h1>
//     </div>
//   );
// }

// export default ShowXY;
