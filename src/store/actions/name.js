const { GET_NAME } = require("./actionTypes");

export function createName(name) {
  return {
    type: GET_NAME,
    name,
  };
}
