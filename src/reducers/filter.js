export default function filter(state = [], action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      // console.log(action.filter);
      return [action.filter];

    default:
      return state;
  }
}
