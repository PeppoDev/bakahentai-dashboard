const change_selected_drag = (selected_drag) => {
  return {
    type: "CHANGE_SELECTED_DRAG",
    payload: selected_drag,
  };
};

const add_img = (img) => {
  return {
    type: "ADD_IMG",
    payload: img,
  };
};
export default { change_selected_drag, add_img };
