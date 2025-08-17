import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When InscriptionForm is created", () => {
  it("a list of form fields is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Name");
    await screen.findByText("First name");
    await screen.findByText("Date");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("In progress");
      await screen.findByText("Register");
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});