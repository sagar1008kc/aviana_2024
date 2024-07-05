import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Mock the Home component
jest.mock('./components/Home', () => () => <div>Home Component</div>);

test('renders Home component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const homeElement = screen.getByText(/Home Component/i);
  expect(homeElement).toBeInTheDocument();
});
