// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import Game from './components/Game';               // or './components/Home' if that's the file name
import LandingHomePage from './components/LandingHomePage';
import MainLayout from './components/MainLayout';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* All routes share MainLayout (nav + theme) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingHomePage />} />
            <Route path="/home" element={<Game />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
