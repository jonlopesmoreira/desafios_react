import React from "react";

function HelloName({ name }) {
  return <p>Hello{name ? `, ${name}` : ""}!</p>;
}

export default HelloName;
