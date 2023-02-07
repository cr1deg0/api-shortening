import { render, screen } from "@testing-library/react";
import InfoContainer from "../InfoContainer";

test("component renders header", () => {
  render(<InfoContainer/>);
  expect(screen.getByRole("heading", {name: /advanced statistics/i})).toBeInTheDocument();
});
test("component renders Brand card", () => {
  render(<InfoContainer/>);
  expect(screen.getByRole("heading", { name: /brand recognition/i })).toBeInTheDocument();
});
test("component renders Records card", () => {
  render(<InfoContainer/>);
  expect(screen.getByRole("heading", { name: /detailed records/i })).toBeInTheDocument();
});
test("component renders Cusotmizable card", () => {
  render(<InfoContainer/>);
  expect(screen.getByRole("heading", { name: /fully customizable/i })).toBeInTheDocument();
});