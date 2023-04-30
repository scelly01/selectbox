import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SelectedCountryAndState = () => {
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSelectedCountry(searchParams.get('country'));
    setSelectedState(searchParams.get('state'));
  }, [location]);

  return (
    <div className='container submitted'>
      <h2>You selected:</h2>
      <p>Country: {selectedCountry}</p>
      <p>State: {selectedState}</p>
    </div>
  );
};

export default SelectedCountryAndState;
