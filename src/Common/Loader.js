import React from "react";
import "./loader.css";
export const Loader = () => {
  return (
    <div className="text-center">
      <div>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
