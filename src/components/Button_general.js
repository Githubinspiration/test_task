import { useState } from "react";

const ButtonGen = ({ BTName, btnFlag, onClick }) => {
  return (
    <>
      <div id="BTName">
        <button className={`btn_pro ${btnFlag ? "colorGray" : "colorWhi"}`} onClick={onClick}>
          {BTName}
        </button>
      </div>
    </>
  );
};

export default ButtonGen;
