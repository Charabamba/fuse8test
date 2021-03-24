export default function numbers(state = [], action) {
  switch (action.type) {
    case "ADD_NUMBER":
      // with concat method : return state.concat([action.number]);
      return [...state, action.number];

    default:
      return state;
  }
}
