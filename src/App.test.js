import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, act } from "./test-utils";
import Universities from "./Universities";
const saga = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();

  const invoke = (action) => saga(store)(next)(action);

  return { store, next, invoke };
};

it("Renders the app with initialState", () => {
  act(() => {
    render(<Universities />, { initialState: { user: "Redux User" } });
  });
});
it("passes through non-function action", () => {
  const { next, invoke } = create();
  const action = { type: "TEST" };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});
it("passes dispatch and getState", () => {
  const { store, invoke } = create();
  invoke((dispatch, getState) => {
    dispatch("FETCH_UNIVERSITIES");
    getState();
  });
  expect(store.dispatch).toHaveBeenCalledWith("FETCH_UNIVERSITIES");
  expect(store.getState).toHaveBeenCalled();
});
