import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";
import api from './api'

jest.mock('./api')

describe('MovieList', () => {
  it('displays list of movies on render', async () => {
    api.get.mockResolvedValue({
      data: [
        { id: 1, title: 'Being There' },
        { id: 2, title: 'Shrek 2' }
      ]
    })

    render(<MovieList />)
    expect(await screen.findByText('Being There')).toBeVisible();

    expect(api.get).toHaveBeenCalledWith('/movies')
  });
});