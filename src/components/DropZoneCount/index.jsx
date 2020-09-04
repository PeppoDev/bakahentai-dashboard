import React from "react";
//css
import "./styles.scss";
//assets
import starIcon from "../../assets/icons/star.svg";

export default function DropZoneCount({ starred, index, onClick, className }) {
  return (
    <>
      <span
        className="chip-container"
        onMouseOver={() => null}
        onClick={() => onClick(index)}
      >
        {starred === index ? <img src={starIcon} alt="" /> : index + 1}
      </span>
    </>
  );
}
