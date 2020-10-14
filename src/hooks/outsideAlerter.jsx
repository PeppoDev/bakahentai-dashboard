import React, { useRef } from "react";

export const useOutsideAlerter = (initialValue) => {
  const ref = useRef(null);
  const [visible, setVisible] = React.useState(initialValue);

  const handleClickOutisde = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    } 
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutisde, true);
  }, [ref]);

  return { visible, setVisible, ref };
};
