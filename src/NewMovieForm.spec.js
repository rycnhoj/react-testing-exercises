import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewMovieForm from "./NewMovieForm";

describe('NewMovieForm', () => {
  const user = userEvent.setup();

  it('has an input with title "New movie title"', ()=> {
    render(<NewMovieForm />)
    expect(screen.getByLabelText("New movie title")).toBeVisible()
  });

  it('has input with placeholder "New movie title"', ()=> {
    render(<NewMovieForm />)
    expect(screen.getByPlaceholderText("New movie title")).toBeVisible()
  });

  it('has button with title Save', async () => {
    const mockOnCreate = jest.fn().mockName('onCreate')
    render(<NewMovieForm onCreate={mockOnCreate} />)
    await user.click(screen.getByText("Save"))
    expect(mockOnCreate).toHaveBeenCalled()
  });
});
