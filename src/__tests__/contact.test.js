//Unit Testing
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";
test("Contact Component should render", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument(); //to check whether the heading is ploaded or not
});
test("Contact Component should render button", () => {
  render(<Contact />);
  //Querying
  const button = screen.getByRole("button");
  //Assertion
  expect(button).toBeInTheDocument(); //to check whether the heading is ploaded or not
});
test("To check whether two input boxes exist in the Contact Component", () => {
  render(<Contact />);
  //Querying
  const inputbox = screen.getAllByRole("textbox");
  //Assertion
  expect(inputbox.length).toBe(2);
  console.log(inputbox);
})
