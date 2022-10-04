import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import People from './components/People';
import Planets from './components/Planets';
import Main from './components/Main';
import Header from './components/common/Header';

const Routess = () => (
  <Router>
    <Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </Header>
  </Router>
);

export default Routess;
