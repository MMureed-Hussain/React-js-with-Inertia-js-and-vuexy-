import React from "react";
import * as types from "../Actions/ActionType"
const initialState = {
    users: [],
    user: {},
    loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return{
        ...state,
        users: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default usersReducers;
