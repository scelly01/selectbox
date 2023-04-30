import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryAndStatePicker from './CountryAndStatePicker';
import SelectedCountryAndState from './SelectedCountryAndState';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<CountryAndStatePicker />} />
      <Route path="/selected" element={<SelectedCountryAndState />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
