import React from "react";
import loading from "../images/loading.webp";

//loading component
const Loading = () => {
  return (
    <div className="text-center mt-3">
      <img src={loading} alt="loading" width="40px" height="40px" />
    </div>
  );
};

export default Loading;
