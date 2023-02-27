let INITIAL_STATE = {
  activities: [], //menampung state
  userName: "Jehan_Sandy",
};

const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DATA": //connection dari return action type : "GET_DATA"
      return {
        ...state,
        activities: action.payload, //connect activities[] di ganti dengan cation.payload dimana payload membawa (data) dari parameter getData
      };
    default:
      return state;
  }
};
export default todo;
