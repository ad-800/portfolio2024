import renderer from "react-test-renderer"
import App from "./App";
import { screen } from "@testing-library/dom";

describe('when user visits home screen', () => {
  it('shows three navigation buttons, the home being active', () => {
    renderer(<App />);
    expect(screen.getByText('About Me')).toBeVisible();
  })
});
