import React from "react";

const LightDarkMode = ({ handleDarkMode, darkMode }) => {
  return (
    <div className="lightButton">
      {darkMode ? (
        <i
          class="bx bx-sun"
          onClick={() => handleDarkMode()}
          style={{ color: "#fff" }}
        ></i>
      ) : (
        <i class="bx bxs-sun" onClick={() => handleDarkMode()}></i>
      )}

      {/* <i class='bx bx-sun' ></i> */}
    </div>
  );
};

export default LightDarkMode;
