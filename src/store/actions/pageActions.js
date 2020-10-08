const changePage = (page) => {
  return {
    type: "CHANGE_PAGE",
    payload: page,
  };
};

const changeSelect = (select) => {
  return {
    type: "CHANGE_SELECT",
    payload: select,
  };
};
export default { changePage, changeSelect };
