import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./home.jsx";

test("renders Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(
    /This is the home page of my React Router demo./i
  );
  expect(linkElement).toBeInTheDocument();
});
