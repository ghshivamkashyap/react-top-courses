import React from "react";
import lodadinggif from "./loading.gif";

function Spinner() {
    return (
      <div className="flex flex-col justify-center items-center min-h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <img className="bg-transparent" width="100px" src={lodadinggif} alt="loading..." />
          <h2 className="text-lg font-semibold text-yellow-200">Loading...</h2>
        </div>
      </div>
    );
  }
  
  export default Spinner;
  