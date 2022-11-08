import { render, screen } from "@testing-library/react";
import MovieRow from "./MovieRow";

describe('MovieRow', () => {
  it.todo('EXERCISE 1');

  // INPUTS -- movie object
  it('displays a title', () => {
    const movie = { title: 'Being There', addedToday: false}
    render(<MovieRow movie={movie} />)

    expect(screen.getByText(movie.title)).toBeVisible()
  });

  it('displays New component if addedToday is true', () => {
    const movie = { title: 'Being There', addedToday: true}
    render(<MovieRow movie={movie} />)

    expect(screen.queryByTitle('Added Today')).toBeVisible()
  });
});
