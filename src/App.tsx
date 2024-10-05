import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Resources from './components/Resources';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Login />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
