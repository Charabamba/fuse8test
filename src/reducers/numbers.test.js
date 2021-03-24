import numbers from "./numbers";

const initialState = [1, 2, 3];

it("should return the initial state", () => {
  expect(numbers(initialState, {})).toEqual(initialState);
});

it("should add the specified number to the numbers array", () => {
  expect(numbers(initialState, { type: "ADD_NUMBER", number: 1 })).toEqual([
    1,
    2,
    3,
    1
  ]);
});
