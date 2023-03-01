import Axios from "axios";

// export const getData = () => {
//   // sebuah function
//   return (dispatch) => {
//     //me-return function
//     Axios.get("http://localhost:2000/activities").then((res) => {
//       dispatch({
//         //yg me-return object dan di kirim ke reducer
//         type: "GET_DATA",
//         payload: res.data,
//       });
//     });
//   };
// };

export const getData = () => {
  return async (dispatch) => {
    try {
      const res = await Axios.get("http://localhost:2000/activities");
      dispatch({
        type: "GET_DATA",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addData = (obj) => {
  return (dispatch) => {
    Axios.post("http://localhost:2000/activities", obj).then((res) => {
      Axios.get("http://localhost:2000/activities").then((res) => {
        dispatch({
          type: "GET_DATA",
          payload: res.data,
        });
      });
    });
  };
};
export const delData = (id) => {
  return (dispatch) => {
    Axios.delete(`http://localhost:2000/activities/${id}`).then((res) => {
      Axios.get("http://localhost:2000/activities").then((res) => {
        dispatch({
          type: "GET_DATA",
          payload: res.data,
        });
      });
    });
  };
};
export const Complete = (id) => {
  return (dispatch) => {
    Axios.patch(`http://localhost:2000/activities/${id}`, {
      isComplete: true,
    }).then((res) => {
      Axios.get("http://localhost:2000/activities").then((res) => {
        dispatch({
          type: "GET_DATA",
          payload: res.data,
        });
      });
    });
  };
};
