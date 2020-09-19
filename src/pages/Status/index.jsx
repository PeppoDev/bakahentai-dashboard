import React from "react";
//components
import ModalSucess from "../../components/ModalSucess";
//css
import "./styles.scss";

function Status() {
  const [open, setOpen] = React.useState(false);
  return (
    <section className="page-container status">
      <h2>Status</h2>
      <button>Modal</button>
      <ModalSucess open={open} setOpen={setOpen} />
    </section>
  );
}

export default Status;
