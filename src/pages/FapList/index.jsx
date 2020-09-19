import React from "react";
//components
import ModalSucess from "../../components/ModalSucess";
//css
import "./styles.scss";

function FapList() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <section className="page-container status">
      <h2>Status</h2>
      <button onClick={handleOpen}>Modal</button>
      <ModalSucess open={open} setOpen={setOpen} />
    </section>
  );
}

export default FapList;
