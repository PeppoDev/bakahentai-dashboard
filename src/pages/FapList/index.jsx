import React from "react";
//components
import ModalAlert from "../../components/ModalAlert";
//css
import "./styles.scss";

function FapList() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <section className="page-container faplist">
      <h2>Status</h2>
      <button onClick={handleOpen}>Modal</button>
      <ModalAlert open={open} setOpen={setOpen} />
    </section>
  );
}

export default FapList;
