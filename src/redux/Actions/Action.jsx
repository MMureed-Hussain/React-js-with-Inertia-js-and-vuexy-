import axios from "axios";
import * as types from "../Actions/ActionType"

export const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
export const loadUsers = () => {
  return function (dispatch) {
    // axios.get(`process.env.url`).then((resp) => {
    axios.get(`http://localhost:5000/user`).then((resp) => {
        console.log("responces", resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log());
  };
};
