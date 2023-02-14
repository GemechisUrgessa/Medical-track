import App from "../App";
import { render } from "@testing-library/react";

describe("Router test", () => {
  it("should render successfuly", () => {
    render(<App />);
  });
});