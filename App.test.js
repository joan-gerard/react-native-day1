import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import App from "./App";

describe("Calculator test", () => {
  describe("adds two numbers", () => {

    let getByTestId;
    beforeEach(() => {
      ({ getByTestId, getByText } = render(<App />));
      fireEvent.changeText(getByTestId("firstnumber"), "2");
      fireEvent.changeText(getByTestId("operator"), "+");
      fireEvent.changeText(getByTestId("secondnumber"), "3");
      fireEvent.press(getByTestId("calculate"));
    });
    it("expect 2", () => {
      expect(getByTestId("firstnumber").props.value).toEqual("2");
    });
    it("expect 3", () => {
      expect(getByTestId("secondnumber").props.value).toEqual("3");
    });
    it("results to 5", () => {
      console.log(getByTestId("result").props);
      expect(getByTestId("result").props.children).toEqual(5);
    });
  });

  describe("subtracts two numbers", () => {
    let getByTestId;
    beforeEach(() => {
      ({ getByTestId, getByText } = render(<App />));
      fireEvent.changeText(getByTestId("firstnumber"), "5");
      fireEvent.changeText(getByTestId("operator"), "-");
      fireEvent.changeText(getByTestId("secondnumber"), "3");
      fireEvent.press(getByTestId("calculate"));
    });
    it("results to 2", () => {
      console.log(getByTestId("result").props.children);
      expect(getByTestId("result").props.children).toEqual(2);
    });
  });
});
