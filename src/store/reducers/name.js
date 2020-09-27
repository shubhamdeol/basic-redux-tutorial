import { GET_NAME } from "../actions/actionTypes";

const initialState = {
  name: "mahi",
};

function name(state = initialState, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}

export default name;
