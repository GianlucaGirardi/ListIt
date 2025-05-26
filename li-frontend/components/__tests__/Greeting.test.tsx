import React from "react";
import { render } from "@testing-library/react-native";
import Greeting from "../Greeting.tsx";

describe("Greeting Component", () => {
  it("renders the correct name", () => {
    const { getByTestId } = render(<Greeting name="Luca" />);
    const text = getByTestId("greeting-text");
    expect(text.props.children).toContain("Luca");
  });
});
