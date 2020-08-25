import React from "react";
//css
import "./styles.scss";
import DragNDrop from "../../components/DragNDrop";

function FapList() {
  return (
    <section className="page-container fapList">
      <h2>FapList</h2>
      <DragNDrop />
    </section>
  );
}

export default FapList;
