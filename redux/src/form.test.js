import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingList from "./form.jsx";

test("renders form component and adds item to the list", async () => {
  render(<ShoppingList />);
  const inputElement = screen.getByPlaceholderText(/Add a grocery item/i);
  await userEvent.type(inputElement, "Bananas");
  const buttonElement = screen.getByText(/Add Item/i);
  await userEvent.click(buttonElement);
  const listItem = screen.getByText(/Bananas/i);
  expect(listItem).toBeInTheDocument();
});
