import React from "react";
import loading from "./loading.gif";

function Spinner() {
  return (
    <div>
      <img
        src={loading}
        alt="LOADING..."
        style={{ margin: "auto", width: "60px", display: "block" }}
      />
    </div>
  );
}

export default Spinner;
