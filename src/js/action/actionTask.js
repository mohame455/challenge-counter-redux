import { INCREMENT, DECREMENT } from "../const/actionTypes";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload:number
  };
};

export const decrement = (payload) => ({
  type: DECREMENT,
  payload
});
