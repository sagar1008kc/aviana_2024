import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;