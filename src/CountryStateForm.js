import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomSelectBox from './CustomSelectBox';

const countries = ['USA', 'Canada', 'Mexico'];
const states = {
  USA: ['California', 'Florida', 'New York'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
  Mexico: ['Jalisco', 'Veracruz', 'Nuevo León'],
};

const CountryAndStatePicker = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState(states[selectedCountry][0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const history = useHistory();

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState(states[country][0]);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry && selectedState) {
      setFormSubmitted(true);
      history.push(`/selected?country=${selectedCountry}&state=${selectedState}`);
    }
  };

  return (
    <div>
      <h1>Select a country and state:</h1>
      <form onSubmit={handleSubmit}>
        <CustomSelectBox options={countries} onChange={handleCountryChange} />
        <CustomSelectBox options={states[selectedCountry]} onChange={handleStateChange} />
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <div>
          <h2>Selected country:</h2>
          <p>{selectedCountry}</p>
          <h2>Selected state:</h2>
          <p>{selectedState}</p>
        </div>
      )}
    </div>
  );
};

export default CountryAndStatePicker;
