export default function houses(state = [], action) {
  switch (action.type) {
    case "GET_DATA":
      // with concat method : return state.concat([action.number]);
      // console.log(action.data);
      return action.data;

    default:
      return state;
  }
}
