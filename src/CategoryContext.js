import React from "react";

// set the defaults
const CategoryContext = React.createContext({
  category: "A",
  setCategory: () => {}
});

export default CategoryContext;
