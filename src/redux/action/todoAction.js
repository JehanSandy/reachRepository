import { Axios } from "axios";

export const getData = () => {
  // sebuah function
  return (dispatch) => {
    //me-return function
    Axios.get("http://localhost:2000/activities").this((rest) => {
      dispatch({
        //yg me-return object dan di kirim ke reducer
        type: "GET_DATA",
        payload: rest.data,
      });
    });
  };
};
export const addData = (obj) => {
  return (dispatch) => {
    Axios.post("http://localhost:2000/activities", obj).then((rest) => {
      Axios.get("http://localhost:2000/activities").then((rest) => {
        dispatch({
          type: "GET_DATA",
          payload: rest.data,
        });
      });
    });
  };
};
export const delData = (id) => {
  return (dispatch) => {
    Axios.delete(`http://localhost:2000/activities/${id}`).then((rest) => {
      Axios.get("http://localhost:2000/activities").then((rest) => {
        dispatch({
          type: "GET_DATA",
          payload: rest.data,
        });
      });
    });
  };
};
export const Complete = (id) => {
  return (dispatch) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, {
      isComplete: true,
    }).then((rest) => {
      Axios.get("http://localhost:2000/activities").then((rest) => {
        dispatch({
          type: "GET_DATA",
          payload: rest.data,
        });
      });
    });
  };
};
