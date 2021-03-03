import { render, screen } from "@testing-library/react";
import Home from "./Home.page";
import { useQuery } from "@apollo/client";

jest.mock("@apollo/client");

test("That we catch errors in home", () => {
  (useQuery as any).mockImplementation(() => ({ error: "erreur" }));

  const { container } = render(<Home />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        An error occured
      </div>
    </div>
  `);
});

test("That we show loading if query is running", () => {
  (useQuery as any).mockImplementation(() => ({ loading: true }));

  const { container } = render(<Home />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        Loading...
      </div>
    </div>
  `);
});

test("That we resolve spaceCenter", () => {
  (useQuery as any).mockImplementation(() => ({ data: {spaceCenters:{nodes:[]}} }));
  render(<Home />);
  expect(screen.getByText('SPACE TRIPS')).toBeVisible()
});
