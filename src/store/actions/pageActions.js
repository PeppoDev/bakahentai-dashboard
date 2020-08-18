const changePage = (page) => {
  return {
    type: "CHANGE_PAGE",
    payload: page,
  };
};
export default { changePage };
