import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import Users from './Users';

const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders Users link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Users/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Users', async () => {
    server.use(
        rest.get('/api/users', (req, res, ctx) => {
            return res(ctx.json([{ name: 'alpha' }, { name: 'bravo' }]));
        })
    );

    render(<Users />);

    await waitFor(() => {
        return expect(screen.getByText('alpha')).toBeInTheDocument();
    });

    await waitFor(() => {
        return expect(screen.getByText('bravo')).toBeInTheDocument();
    });
});
