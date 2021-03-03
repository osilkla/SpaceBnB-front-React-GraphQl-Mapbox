import { render } from "@testing-library/react";
import SpaceCenterList from "./index";
import { BrowserRouter } from "react-router-dom";
import React from "react";

test('renders "No space centers available" when there are no spaceCenter', () => {
  const { getByText } = render(<SpaceCenterList spaceCenters={[]} />);
  expect(getByText(/No space centers available/i)).toBeInTheDocument();
});

test("renders spaceCenter", () => {
  const fakeSp = [
    {
      id: "1",
      name: "Hintz Union Space Center",
      uid: "da9c2dee-3b38-4d21-b911-083599c05dad",
      description:
        "Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.",
      latitude: -35.9083,
      longitude: -34.7214,
      planet: { id: "1", name: "Mercury", code: "MER" },
    },
    {
      id: "2",
      name: "Jedediah Dale Space Center",
      uid: "3d1d7388-5760-4658-aa3d-b90d88cc457d",
      description:
        "Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.",
      latitude: -34.0737,
      longitude: 124.5693,
      planet: { id: "1", name: "Mercury", code: "MER" },
    },
  ];
  const { container } = render(
    <BrowserRouter>
      <SpaceCenterList spaceCenters={fakeSp} />
    </BrowserRouter>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <ul
        class="sc-gKsewC hMCLCh"
      >
        <li>
          <div>
            <div
              class="sc-bdfBwQ kGgaZi"
            >
              <h1
                class="sc-hKgILt cRXyCt"
              >
                Hintz Union Space Center
              </h1>
              <h2
                class="sc-eCssSg cFCRre"
              >
                Mercury
              </h2>
              <img
                alt="icon-rocket"
                class="sc-dlfnbm fHtshh"
                src="Rocket.png"
              />
              <footer
                class="sc-jSgupP PsvgY"
              >
                <a
                  class="sc-gsTCUz ekUdVR"
                  href="/spaceCenter/1"
                >
                  See All Flights
                </a>
              </footer>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div
              class="sc-bdfBwQ kGgaZi"
            >
              <h1
                class="sc-hKgILt cRXyCt"
              >
                Jedediah Dale Space Center
              </h1>
              <h2
                class="sc-eCssSg cFCRre"
              >
                Mercury
              </h2>
              <img
                alt="icon-rocket"
                class="sc-dlfnbm fHtshh"
                src="Rocket.png"
              />
              <footer
                class="sc-jSgupP PsvgY"
              >
                <a
                  class="sc-gsTCUz ekUdVR"
                  href="/spaceCenter/2"
                >
                  See All Flights
                </a>
              </footer>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `);
});
