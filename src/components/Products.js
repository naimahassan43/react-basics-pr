import React, { useState } from "react";

export const Products = (props) => {
  const [items, setItems] = useState([
    { pCode: 1, pName: "Apple" },
    { pCode: 2, pName: "Banana" },
    { pCode: 3, pName: "Mangoes" },
  ]);

  return props.isAdmin ? (
    items.map((item) => {
      return <li>{item.pName}</li>;
    })
  ) : (
    <h1>No Data Found</h1>
  );
};
